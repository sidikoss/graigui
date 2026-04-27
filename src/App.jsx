import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import RootLayout from './components/layout/RootLayout'
import ErrorBoundary from './components/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-guinea-red border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-500">Chargement...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPage />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="legal/:type" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LegalPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}