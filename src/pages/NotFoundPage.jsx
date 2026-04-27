import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl font-extrabold text-guinea-red/20">404</div>
          <div className="text-6xl mb-4">🔍</div>
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
          <Link to="/contact" className="btn-secondary">
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}