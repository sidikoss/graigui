import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from '../ui/WhatsAppButton'
import ScrollToTop from '../ui/ScrollToTop'
import ThemeToggle from '../ui/ThemeToggle'

export default function RootLayout() {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsTransitioning(true)
    
    const timer = setTimeout(() => {
      setIsTransitioning(false)
      setIsLoading(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <div className="loading-bar" />}
      <Header />
      <main 
        className={`flex-1 pt-16 transition-opacity duration-200 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Outlet context={{ currentPath: location.pathname }} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <ThemeToggle />
    </div>
  )
}