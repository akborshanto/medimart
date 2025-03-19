import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn, MotionDiv } from "@/components/ui/motion-div"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/30 dark:to-gray-950 py-16 md:py-24 transition-colors duration-500">
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <FadeIn from="left" delay={0.1}>
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-teal-100 dark:bg-teal-900/50 px-3 py-1 text-sm font-medium text-teal-800 dark:text-teal-300 transition-colors duration-300">
                  #1 Online Pharmacy
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Your Health, <span className="text-teal-600 dark:text-teal-400">Our Priority</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Get your medicines delivered at your doorstep. Fast, reliable, and secure.
                </p>
              </div>

              <div className="relative max-w-md">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for medicines, vitamins, and more..."
                  className="pl-10 pr-20 h-12 rounded-full border-teal-200 dark:border-teal-800 shadow-sm transition-all duration-300"
                />
                <Button className="absolute right-1 top-1 rounded-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 h-10 transition-all duration-300">
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500"
                  >
                    Shop Now
                  </Link>
                </MotionDiv>
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/prescriptions"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    Upload Prescription
                  </Link>
                </MotionDiv>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">10k+</span>
                  <span className="text-sm text-muted-foreground">Products</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">8k+</span>
                  <span className="text-sm text-muted-foreground">Customers</span>
                </MotionDiv>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">99%</span>
                  <span className="text-sm text-muted-foreground">Satisfaction</span>
                </MotionDiv>
              </div>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={0.3}>
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="relative">
                <MotionDiv
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-teal-200 dark:bg-teal-800/50 opacity-70"
                ></MotionDiv>
                <MotionDiv
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-teal-200 dark:bg-teal-800/50 opacity-70"
                ></MotionDiv>

                <div className="relative overflow-hidden rounded-2xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl transition-colors duration-300">
                  <img
                    src="/placeholder.svg?height=600&width=500&text=Pharmacy+Image"
                    alt="Pharmacy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-600 dark:text-green-400"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Verified Products</p>
                      <p className="text-sm font-bold">100% Authentic</p>
                    </div>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -right-4 top-4 rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Secure Payment</p>
                      <p className="text-sm font-bold">Multiple Options</p>
                    </div>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Background elements */}
      <MotionDiv
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-100 dark:bg-teal-900/30 opacity-20 blur-3xl"
      ></MotionDiv>
      <MotionDiv
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-100 dark:bg-teal-900/30 opacity-20 blur-3xl"
      ></MotionDiv>
    </section>
  )
}

