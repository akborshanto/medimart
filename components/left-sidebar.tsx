import type React from "react"
import { BookmarkIcon, CalendarDays, ChevronDown, Clock, Flag, Gamepad2, ShoppingBag, Users, Video } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface LeftSidebarProps {
  className?: string
}

export function LeftSidebar({ className }: LeftSidebarProps) {
  return (
    <aside className={`w-[300px] bg-white overflow-y-auto p-2 ${className}`}>
      <div className="space-y-1 pt-2">
        <SidebarItem
          icon={
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
              <AvatarFallback>FB</AvatarFallback>
            </Avatar>
          }
          label="John Doe"
        />

        <SidebarItem icon={<Users className="h-9 w-9 p-2 bg-gray-200 text-[#1877F2] rounded-full" />} label="Friends" />
        <SidebarItem
          icon={<Clock className="h-9 w-9 p-2 bg-gray-200 text-[#1877F2] rounded-full" />}
          label="Memories"
        />
        <SidebarItem
          icon={<BookmarkIcon className="h-9 w-9 p-2 bg-gray-200 text-purple-600 rounded-full" />}
          label="Saved"
        />
        <SidebarItem icon={<Flag className="h-9 w-9 p-2 bg-gray-200 text-orange-500 rounded-full" />} label="Pages" />
        <SidebarItem
          icon={<CalendarDays className="h-9 w-9 p-2 bg-gray-200 text-red-500 rounded-full" />}
          label="Events"
        />
        <SidebarItem
          icon={<Gamepad2 className="h-9 w-9 p-2 bg-gray-200 text-blue-500 rounded-full" />}
          label="Gaming"
        />

        <Button variant="ghost" className="w-full justify-start gap-3 font-medium">
          <ChevronDown className="h-9 w-9 p-2 bg-gray-200 rounded-full" />
          See more
        </Button>
      </div>

      <div className="border-t border-gray-300 my-3 pt-3">
        <h3 className="text-gray-500 font-medium px-2 mb-2">Your shortcuts</h3>
        <SidebarItem icon={<Gamepad2 className="h-9 w-9 rounded-md bg-gray-200" />} label="Casual Gaming" />
        <SidebarItem icon={<Users className="h-9 w-9 rounded-md bg-gray-200" />} label="Web Developers Group" />
        <SidebarItem icon={<Video className="h-9 w-9 rounded-md bg-gray-200" />} label="Creative Videos" />
      </div>

      <div className="border-t border-gray-300 my-3 pt-3">
        <h3 className="text-gray-500 font-medium px-2 mb-2">Meta</h3>
        <SidebarItem icon={<ShoppingBag className="h-9 w-9 p-2 bg-gray-200 rounded-full" />} label="Marketplace" />
        <SidebarItem icon={<Video className="h-9 w-9 p-2 bg-gray-200 rounded-full" />} label="Watch" />
      </div>

      <div className="text-xs text-gray-500 px-2 pt-4">
        <p>Privacy · Terms · Advertising · Ad choices · Cookies · More · Meta © 2025</p>
      </div>
    </aside>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
}

function SidebarItem({ icon, label }: SidebarItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-start gap-3 font-medium">
      {icon}
      {label}
    </Button>
  )
}

