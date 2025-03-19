"use client"

import { type ReactNode, useState } from "react"
import { Navbar } from "@/components/navbar"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { useIsMobile } from "@/hooks/use-mobile"

interface FacebookLayoutProps {
  children: ReactNode
}

export function FacebookLayout({ children }: FacebookLayoutProps) {
  const isMobile = useIsMobile()
  const [showLeftSidebar, setShowLeftSidebar] = useState(false)

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <Navbar onMenuClick={() => setShowLeftSidebar(!showLeftSidebar)} />
      <div className="flex">
        {/* Left Sidebar - Hidden on mobile by default */}
        <LeftSidebar
          className={`${isMobile ? "fixed z-50 h-screen" : "sticky top-16 h-[calc(100vh-64px)]"} ${
            isMobile && !showLeftSidebar ? "-translate-x-full" : "translate-x-0"
          } transition-transform duration-200 ease-in-out`}
        />

        {/* Main Content */}
        <main className="flex-1 px-2 py-4 md:px-4 max-w-[680px] mx-auto">{children}</main>

        {/* Right Sidebar - Hidden on mobile */}
        {!isMobile && <RightSidebar className="sticky top-16 h-[calc(100vh-64px)]" />}
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobile && showLeftSidebar && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowLeftSidebar(false)} />
      )}
    </div>
  )
}

