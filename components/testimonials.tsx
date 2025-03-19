import { Star } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, MotionDiv } from "@/components/ui/motion-div"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      content:
        "MediMart has been a lifesaver for me. The convenience of ordering my regular medications from home and having them delivered quickly is invaluable. Their customer service is exceptional!",
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Diabetic Patient",
      content:
        "As someone who needs regular medication for diabetes, MediMart has made my life so much easier. Their prescription verification process is smooth, and the delivery is always on time.",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Mother of Two",
      content:
        "The baby care section is fantastic! I can get all my children's medicines and healthcare products in one place. The detailed product information helps me make informed choices.",
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
      rating: 4,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Senior Citizen",
      content:
        "The website is very easy to navigate, even for someone my age. I appreciate the reminders for refills and the option to set up recurring orders for my regular medications.",
      avatar: "/placeholder.svg?height=60&width=60&text=DW",
      rating: 5,
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Healthcare Professional",
      content:
        "As a healthcare professional, I'm impressed with the range of products and the accuracy of the medical information provided. I often recommend MediMart to my patients.",
      avatar: "/placeholder.svg?height=60&width=60&text=PP",
      rating: 5,
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Fitness Enthusiast",
      content:
        "The supplements section is comprehensive and offers great quality products. I've been ordering my protein supplements and vitamins from MediMart for over a year now.",
      avatar: "/placeholder.svg?height=60&width=60&text=JT",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <FadeIn from="bottom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Don't just take our word for it. Here's what our customers have to say about their experience with
              MediMart.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <MotionDiv
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mt-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="mt-3 text-muted-foreground">"{testimonial.content}"</blockquote>
              </MotionDiv>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

