import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/ui/product-card"
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/motion-div"

export function FeaturedMedicines() {
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      description: "Pain reliever and fever reducer",
      price: 5.99,
      originalPrice: 7.99,
      image: "/placeholder.svg?height=200&width=200&text=Paracetamol",
      rating: 4.8,
      reviews: 120,
      isRx: false,
      discount: 25,
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      description: "Antibiotic for bacterial infections",
      price: 12.99,
      originalPrice: 15.99,
      image: "/placeholder.svg?height=200&width=200&text=Amoxicillin",
      rating: 4.6,
      reviews: 85,
      isRx: true,
      discount: 18,
      stock: "In Stock",
    },
    {
      id: 3,
      name: "Vitamin D3 1000IU",
      description: "Supports bone health and immunity",
      price: 8.49,
      originalPrice: 9.99,
      image: "/placeholder.svg?height=200&width=200&text=Vitamin+D3",
      rating: 4.9,
      reviews: 210,
      isRx: false,
      discount: 15,
      stock: "In Stock",
    },
    {
      id: 4,
      name: "Omeprazole 20mg",
      description: "Reduces stomach acid production",
      price: 14.99,
      originalPrice: 19.99,
      image: "/placeholder.svg?height=200&width=200&text=Omeprazole",
      rating: 4.7,
      reviews: 95,
      isRx: true,
      discount: 25,
      stock: "Low Stock",
    },
    {
      id: 5,
      name: "Cetirizine 10mg",
      description: "Antihistamine for allergies",
      price: 7.49,
      originalPrice: 8.99,
      image: "/placeholder.svg?height=200&width=200&text=Cetirizine",
      rating: 4.5,
      reviews: 150,
      isRx: false,
      discount: 16,
      stock: "In Stock",
    },
    {
      id: 6,
      name: "Ibuprofen 400mg",
      description: "Anti-inflammatory pain reliever",
      price: 6.99,
      originalPrice: 8.49,
      image: "/placeholder.svg?height=200&width=200&text=Ibuprofen",
      rating: 4.7,
      reviews: 180,
      isRx: false,
      discount: 17,
      stock: "In Stock",
    },
    {
      id: 7,
      name: "Metformin 500mg",
      description: "Oral diabetes medication",
      price: 9.99,
      originalPrice: 12.99,
      image: "/placeholder.svg?height=200&width=200&text=Metformin",
      rating: 4.8,
      reviews: 75,
      isRx: true,
      discount: 23,
      stock: "In Stock",
    },
    {
      id: 8,
      name: "Multivitamin Complex",
      description: "Complete daily nutritional support",
      price: 15.99,
      originalPrice: 19.99,
      image: "/placeholder.svg?height=200&width=200&text=Multivitamin",
      rating: 4.9,
      reviews: 230,
      isRx: false,
      discount: 20,
      stock: "In Stock",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container">
        <FadeIn from="bottom">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Medicines</h2>
              <p className="text-muted-foreground">Top-selling products with the best prices</p>
            </div>
            <Link
              href="/shop"
              className="flex items-center text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
            >
              View all products
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {medicines.map((medicine) => (
            <StaggerItem key={medicine.id}>
              <ProductCard product={medicine} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

