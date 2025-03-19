import { FadeIn, StaggerContainer, StaggerItem, MotionDiv } from "@/components/ui/motion-div"

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Browse & Select",
      description: "Search our extensive catalog of medicines and healthcare products.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Upload Prescription",
      description: "For prescription medicines, simply upload your valid prescription.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M12 12v6"></path>
          <path d="M9 15h6"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Secure Checkout",
      description: "Complete your purchase with our secure payment options.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Fast Delivery",
      description: "Get your medicines delivered to your doorstep quickly and safely.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="container">
        <FadeIn from="bottom">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Getting your medicines has never been easier. Follow these simple steps.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.id} className="relative flex flex-col items-center text-center">
              <MotionDiv
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400"
              >
                {step.icon}
              </MotionDiv>

              {step.id < steps.length && (
                <MotionDiv
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute left-[60%] top-10 hidden w-[40%] border-t-2 border-dashed border-muted lg:block"
                ></MotionDiv>
              )}

              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white dark:bg-teal-500">
                <span className="text-sm font-bold">{step.id}</span>
              </div>

              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

