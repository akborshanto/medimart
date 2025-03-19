"use client"

import { Heart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AddToCartButton } from "@/components/ui/add-to-cart-button"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScaleOnHover } from "@/components/ui/motion-div"

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    reviews: number
    isRx?: boolean
    discount?: number
    stock: "In Stock" | "Low Stock" | "Out of Stock"
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <ScaleOnHover scale={1.02}>
      <Card
        className="overflow-hidden group h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {product.discount && product.discount > 0 && (
            <Badge className="absolute left-3 top-3 z-10 bg-red-500 hover:bg-red-600">{product.discount}% OFF</Badge>
          )}
          {product.isRx && (
            <Badge
              variant="outline"
              className="absolute right-3 top-3 z-10 bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              Rx
            </Badge>
          )}
          <Link href={`/medicine/${product.id}`}>
            <div className="overflow-hidden">
              <motion.img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-48 w-full object-contain p-4"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/5 flex items-center justify-center"
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-12 rounded-full bg-white shadow-md"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <CardContent className="p-4 flex-grow">
          <div className="mb-2 flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
          </div>

          <Link href={`/medicine/${product.id}`}>
            <h3 className="font-medium hover:text-teal-600 transition-colors">{product.name}</h3>
          </Link>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${product.price}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>
            <span
              className={`text-xs font-medium ${
                product.stock === "In Stock"
                  ? "text-green-600"
                  : product.stock === "Low Stock"
                    ? "text-amber-600"
                    : "text-red-600"
              }`}
            >
              {product.stock}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 mt-auto">
          <AddToCartButton className="w-full" />
        </CardFooter>
      </Card>
    </ScaleOnHover>
  )
}

