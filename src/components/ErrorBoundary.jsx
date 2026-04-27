import { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Une erreur s'est produite
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Nous nous excusons pour la gêne occasionnée. Veuillez rafraîchir la page ou retourner à l'accueil.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Rafraîchir la page
              </button>
              <Link to="/" className="btn-secondary">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary