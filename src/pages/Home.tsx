import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import ProductSection from '@/sections/ProductSection'
import ServiceBar from '@/sections/ServiceBar'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <ProductSection />
      <ServiceBar />
      <Footer />
    </div>
  )
}
