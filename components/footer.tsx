import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-teal-600 text-white">
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
              <span className="ml-2 text-xl font-bold text-white">MediMart</span>
            </div>

            <p className="mt-4 max-w-xs">
              Your trusted online pharmacy for all your healthcare needs. We deliver quality medicines right to your
              doorstep.
            </p>

            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/prescriptions" className="hover:text-white hover:underline">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-white hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white hover:underline">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white hover:underline">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-white hover:underline">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-teal-500" />
                <span>123 Healthcare Avenue, Medical District, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-teal-500" />
                <span>+1 (888) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-teal-500" />
                <span>support@medimart.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 font-medium text-white">Business Hours</h4>
              <p className="text-sm">Monday - Friday: 8:00 AM - 10:00 PM</p>
              <p className="text-sm">Saturday - Sunday: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">&copy; {currentYear} MediMart. All rights reserved. B4A6V4</p>
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=30&width=50&text=Visa" alt="Visa" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50&text=Mastercard" alt="Mastercard" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50&text=PayPal" alt="PayPal" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50&text=Stripe" alt="Stripe" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

