import { HeroSection } from "@/components/hero-section"
import { FeaturedMedicines } from "@/components/featured-medicines"
import { Categories } from "@/components/categories"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { DownloadApp } from "@/components/download-app"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Categories />
      <FeaturedMedicines />
      <HowItWorks />
      <Testimonials />
      <DownloadApp />
    </main>
  )
}

