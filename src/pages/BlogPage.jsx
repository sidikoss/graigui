import { SEOHead, pageMeta } from '../components/seo/SEOMeta'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const categoryIcons = { Guide: '📚', Astuces: '💡', Économie: '💰', Histoire: '📖', Blanc: '⚪', Couleurs: '🌈', Premium: '💎', '🇬🇳': '🇬🇳', '🧹': '🧹' }

export default function BlogPage() {
  const meta = pageMeta['/blog']
  
  return (
    <>
      <SEOHead {...meta} />
      <div className="space-y-20 py-12">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
              Blog — Conseils et Actualités
            </h1>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Découvrez nos conseils pour bien choisir vos fournitures scolaires et 
              soutenir l'éducation en Guinée.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <article className="card overflow-hidden group h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 bg-gradient-to-br from-guinea-red/20 via-guinea-yellow/20 to-guinea-green/20 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                      <span className="px-2 py-1 rounded-full bg-guinea-red/10 text-guinea-red text-xs font-medium">
                        Actualités
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-guinea-red transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-zinc-500">{post.date}</span>
                      <span className="text-sm font-medium text-guinea-red group-hover:underline">
                        Lire →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Thèmes les Plus Recherchés
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['craies scolaires guinée', 'achat craies écoles conakry', 'fournisseur craies qualité', 'prix craies scolaires', 'livraison craies guinée', 'grossiste fournitures scolaires'].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white dark:bg-zinc-800 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-guinea-red/10 hover:text-guinea-red cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-2xl bg-gradient-to-r from-guinea-red to-guinea-yellow p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              Contactez-nous directement et nous répondrons à toutes vos questions sur les craies et fournitures scolaires.
            </p>
            <Link to="/contact" className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-guinea-red shadow-lg transition-all hover:bg-zinc-100">
              Poser une question
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}