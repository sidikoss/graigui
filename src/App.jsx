import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useCallback } from 'react'
import RootLayout from './components/layout/RootLayout'
import ErrorBoundary from './components/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]" role="status" aria-label="Chargement en cours">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-guinea-red border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-500 sr-only">Chargement...</p>
      </div>
    </div>
  )
}

export default function App() {
  const renderRoute = useCallback((Component) => (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  ), [])

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={renderRoute(HomePage)} />
          <Route path="services" element={renderRoute(ServicesPage)} />
          <Route path="about" element={renderRoute(AboutPage)} />
          <Route path="blog" element={renderRoute(BlogPage)} />
          <Route path="blog/:id" element={renderRoute(BlogPostPage)} />
          <Route path="contact" element={renderRoute(ContactPage)} />
          <Route path="legal/:type" element={renderRoute(LegalPage)} />
          <Route path="product/:id" element={renderRoute(ProductPage)} />
          <Route path="admin" element={renderRoute(AdminPage)} />
          <Route path="*" element={renderRoute(NotFoundPage)} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
