import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { SEOHead } from '../components/seo/SEOMeta'

export default function BlogPostPage() {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
        <Link to="/blog" className="btn-primary">Retour au blog</Link>
      </div>
    )
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} | Blog Craigui`} 
        description={post.excerpt}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-sm font-medium text-guinea-red hover:underline mb-8 inline-block">
          ← Retour au blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <span className="px-2 py-1 rounded-full bg-guinea-red/10 text-guinea-red text-xs font-bold uppercase">Conseils</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white leading-tight sm:text-5xl">
            {post.title}
          </h1>
        </header>

        <div className="aspect-video rounded-3xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-8xl mb-12 shadow-inner">
          {post.image}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="card p-8 bg-guinea-red/5 border-guinea-red/20 text-center">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Besoin de craies de qualité ?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Découvrez nos produits fabriqués en Guinée pour une éducation sans poussière.
            </p>
            <Link to="/services" className="btn-primary inline-block">
              Voir nos produits
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}
