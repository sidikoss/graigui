import { SEOHead, pageMeta } from '../components/seo/SEOMeta'
import { Link } from 'react-router-dom'

const articles = [
  { id: 1, title: 'Guide Complet pour Choisir vos Craies Scolaires en Guinée', excerpt: 'Tout ce que vous devez savoir pour sélectionner les meilleures craies pour votre établissement.', category: 'Guide', readTime: '5 min', date: '15 Mars 2024' },
  { id: 2, title: 'Pourquoi les Craies Importées ne Conviennent pas au Climat Guinéen', excerpt: 'Les spécificités du climat local exigent des craies adaptées. Découvrez pourquoi.', category: 'Astuces', readTime: '4 min', date: '8 Mars 2024' },
  { id: 3, title: 'Comment Économiser sur vos Fournitures Scolaires en 2024', excerpt: 'Conseils pratiques pour réduire le budget fournitures sans compromettre la qualité.', category: 'Économie', readTime: '6 min', date: '1er Mars 2024' },
  { id: 4, title: "L'Histoire de la Fabrication de Craies en Afrique de l'Ouest", excerpt: "Plongez dans l'histoire fascinante de la craie et son importance dans l'éducation.", category: 'Histoire', readTime: '8 min', date: '22 Février 2024' },
  { id: 5, title: "Soutenir la Fabrication Locale : Pourquoi c'Est Important", excerpt: "Comment vos achats peuvent aider l'économie guinéenne et créer des emplois.", category: 'Économie', readTime: '4 min', date: '15 Février 2024' }
]

const categoryIcons = { Guide: '📚', Astuces: '💡', Économie: '💰', Histoire: '📖' }

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
            {articles.map((article) => (
              <article key={article.id} className="card overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-guinea-red/20 via-guinea-yellow/20 to-guinea-green/20 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[article.category]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                    <span className="px-2 py-1 rounded-full bg-guinea-red/10 text-guinea-red text-xs font-medium">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-guinea-red transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-zinc-500">{article.date}</span>
                    <span className="text-sm font-medium text-guinea-red group-hover:underline">
                      Lire →
                    </span>
                  </div>
                </div>
              </article>
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