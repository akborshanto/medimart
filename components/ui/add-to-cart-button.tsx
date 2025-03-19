"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AddToCartButtonProps extends ButtonProps {
  onAddToCart?: () => void
}

export function AddToCartButton({ onAddToCart, children, ...props }: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleClick = () => {
    setIsAdded(true)
    onAddToCart?.()

    // Reset after animation
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <Button onClick={handleClick} className="relative overflow-hidden bg-teal-600 hover:bg-teal-700" {...props}>
      <span className={`flex items-center transition-opacity duration-300 ${isAdded ? "opacity-0" : "opacity-100"}`}>
        <ShoppingCart className="mr-2 h-4 w-4" />
        {children || "Add to Cart"}
      </span>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isAdded ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Check className="mr-2 h-4 w-4" />
        Added
      </motion.div>
    </Button>
  )
}

