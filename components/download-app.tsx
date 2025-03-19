import Link from "next/link"
import { Check } from "lucide-react"
import { FadeIn, MotionDiv } from "@/components/ui/motion-div"

export function DownloadApp() {
  const features = [
    "Easy medicine ordering on the go",
    "Prescription upload from your phone",
    "Medication reminders",
    "Order tracking in real-time",
    "Secure payment options",
    "24/7 customer support",
  ]

  return (
    <section className="py-16">
      <div className="container">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-700 dark:to-teal-600 transition-colors duration-300">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Download the MediMart App
                  </h2>
                  <p className="text-lg text-teal-50">
                    Get your medicines delivered faster with our mobile app. Available for iOS and Android.
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <MotionDiv
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <li className="flex items-center text-teal-50">
                          <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-teal-50">
                            <Check className="h-3 w-3 text-teal-600" />
                          </div>
                          {feature}
                        </li>
                      </MotionDiv>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href="#" className="inline-block">
                      <img
                        src="/placeholder.svg?height=50&width=150&text=App+Store"
                        alt="Download on App Store"
                        className="h-12"
                      />
                    </Link>
                  </MotionDiv>
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href="#" className="inline-block">
                      <img
                        src="/placeholder.svg?height=50&width=150&text=Google+Play"
                        alt="Get it on Google Play"
                        className="h-12"
                      />
                    </Link>
                  </MotionDiv>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/placeholder.svg?height=600&width=400&text=App+Screenshot"
                    alt="MediMart App"
                    className="h-full w-full object-cover"
                  />
                </MotionDiv>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

