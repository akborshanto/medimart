import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, MotionDiv } from "@/components/ui/motion-div"

export function Categories() {
  const categories = [
    {
      id: 1,
      name: "Prescription Medicines",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      ),
      href: "/categories/prescription",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400",
    },
    {
      id: 2,
      name: "Over-the-Counter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="m8 2 2 2-4 4-2-2 4-4Z"></path>
          <path d="M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
          <path d="m21 15-1.5-1.5M14 21v-2M7 21v-2M3 15l1.5-1.5"></path>
        </svg>
      ),
      href: "/categories/otc",
      color: "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400",
    },
    {
      id: 3,
      name: "Vitamins & Supplements",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ),
      href: "/categories/vitamins",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400",
    },
    {
      id: 4,
      name: "Personal Care",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
        </svg>
      ),
      href: "/categories/personal-care",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400",
    },
    {
      id: 5,
      name: "Medical Devices",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      href: "/categories/devices",
      color: "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400",
    },
    {
      id: 6,
      name: "Baby Care",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M9 12h.01"></path>
          <path d="M15 12h.01"></path>
          <path d="M10 16c.5.3 1.5.5 2 .5s1.5-.2 2-.5"></path>
          <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
        </svg>
      ),
      href: "/categories/baby",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-400",
    },
  ]

  return (
    <section className="py-16 transition-colors duration-300">
      <div className="container">
        <FadeIn from="bottom">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
              <p className="text-muted-foreground">Browse our wide range of healthcare products</p>
            </div>
            <Link
              href="/categories"
              className="flex items-center text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
            >
              View all categories
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <StaggerItem key={category.id} from="bottom">
              <MotionDiv
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={category.href}
                  className="group flex flex-col items-center rounded-lg border bg-card p-4 text-card-foreground shadow transition-colors hover:border-teal-200 hover:bg-teal-50 dark:hover:border-teal-800 dark:hover:bg-teal-900/20"
                >
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-center text-sm font-medium group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {category.name}
                  </h3>
                </Link>
              </MotionDiv>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

