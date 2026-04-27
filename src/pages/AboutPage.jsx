import { SEOHead, pageMeta } from '../components/seo/SEOMeta'
import { Link } from 'react-router-dom'

const values = [
  { title: 'Qualité Premium', desc: 'Chaque craie est conçue pour durer. Nous utilisons des matériaux soigneusement sélectionnés pour garantir une écriture fluide et une résistance maximale.', icon: '⭐' },
  { title: 'Prix Local', desc: 'En fabricant en Guinée, nous réduisons les coûts logistiques et vous faisons bénéficier des prix les plus bas du marché. Économie sans compromis.', icon: '💰' },
  { title: 'Fierté Guinéenne', desc: 'Nous croyons en la capacité des Guinéens à produire des produits de qualité. Chaque craie Craigui est une fierté nationale.', icon: '🇬🇳' }
]

const stats = [
  { value: '500+', label: 'Écoles livrées' },
  { value: '150 000+', label: 'Craies produites' },
  { value: '3', label: 'Ans d\'expertise' },
  { value: '98%', label: 'Taux de satisfaction' }
]

export default function AboutPage() {
  const meta = pageMeta['/about']
  
  return (
    <>
      <SEOHead {...meta} />
      <div className="space-y-20 py-12">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
              L'Histoire derrière Craigui
            </h1>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Une passion née d'un constat simple : les écoles guinéennes méritent mieux.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-guinea-red via-guinea-yellow to-guinea-green flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🏭</div>
                    <p className="text-xl font-bold text-white">Made in Guinea</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 shadow-lg dark:bg-zinc-900">
                  <p className="text-sm font-semibold text-guinea-green">✓ Fabrication locale</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Le Déclic
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Tout a commencé un matin de septembre, quand nous avons vu une école primaire 
                payer le prix fort pour des craies qui arrivaient déjà cassées. Les enseignants 
                se plaignaient, les élèves souffraient, et le budget des écoles s'épuisait.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nous nous sommes alors posé une question simple : pourquoi importer alors que 
                nous pouvons fabriquer ici, en Guinée, avec des matériaux adaptés à notre climat 
                et nos besoins ?
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Après des mois de recherche et de développement, Craigui est né. Aujourd'hui, 
                nous produisons des craies de qualité supérieure qui satisfont les normes internationales 
                tout en restant accessibles aux établissements guinéens.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-zinc-900 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-8">
              Notre Mission
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Permettre à chaque école, université et institut de Guinée d'avoir accès 
              à des fournitures scolaires de qualité sans se ruiner. Parce que l'éducation 
              de nos enfants mérite le meilleur, au prix juste.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Nos Valeurs
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="card p-8">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{v.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Craigui en Chiffres
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold text-guinea-red">{s.value}</div>
                <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="rounded-2xl bg-guinea-yellow/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Rejoignez notre mission
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Chaque commande soutient l'économie locale et permet à plus d'écoles de bénéficier 
              de craies de qualité à prix accessible.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Passer une commande
              </Link>
              <Link to="/services" className="btn-secondary">
                Découvrir nos produits
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}