"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingCart, User, Menu, X, Heart, Package, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useIsMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3)

  const isLoggedIn = false // Replace with actual auth state

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Prescriptions", href: "/prescriptions" },
    { name: "Dashboard", href: "/dashboard" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex h-16 items-center">
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Logo */}
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-teal-600 text-white dark:bg-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute inset-0 h-full w-full p-1"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-teal-600 dark:text-teal-400">MediMart</span>
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                    pathname === link.href ? "text-teal-600 dark:text-teal-400" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Search, cart, and user actions */}
        <div className="flex items-center space-x-1 md:space-x-2 ml-auto">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Search */}
          <AnimatePresence>
            {isSearchOpen && !isMobile ? (
              <motion.div
                className="relative w-60 mr-2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 240 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search medicines..."
                  className="w-full pl-9 pr-4"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </motion.div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </AnimatePresence>

          {/* Cart */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-foreground relative"
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-teal-600 dark:bg-teal-500">
                  {cartCount}
                </Badge>
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </motion.div>

          {/* User menu */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-muted h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <User className="h-4 w-4" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="cursor-pointer">
                    <Package className="mr-2 h-4 w-4" />
                    <span>Orders</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist" className="cursor-pointer">
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Wishlist</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                size="sm"
                asChild
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background md:hidden"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-teal-600 text-white dark:bg-teal-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute inset-0 h-full w-full p-1"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold text-teal-600 dark:text-teal-400">MediMart</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="container mt-4 grid gap-6 pb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search medicines..." className="w-full pl-9 pr-4" />
              </div>
              <nav className="grid gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                        pathname === link.href
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="grid gap-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/login"
                    className="flex w-full items-center justify-center rounded-md bg-teal-600 px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/register"
                    className="flex w-full items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-muted dark:border-gray-700 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create Account
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

