import { SEOHead, pageMeta } from '../components/seo/SEOMeta'

export default function HomePage() {
  const meta = pageMeta['/']
  
  return (
    <>
      <SEOHead {...meta} />
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-20 dark:from-zinc-950 dark:to-zinc-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-guinea-red/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-guinea-yellow/10 blur-3xl" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100 shadow-lg dark:bg-zinc-800">
                  <div className="relative h-16 w-16">
                    <div className="absolute inset-0 rounded-lg bg-guinea-red" />
                    <div className="absolute inset-x-0 top-1/3 h-1/3 bg-guinea-yellow" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-guinea-green rounded-b-lg" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
                La Craie Guinéenne que les{' '}
                <span className="text-guinea-red">Écoles Méritent</span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
                Fabriquée en Guinée. Pour les Guinéens. À Prix Local.
              </p>
              
              <p className="mt-2 font-semibold text-guinea-green">
                Qualité garantie. Livraison partout.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a 
                  href="https://wa.me/224661862044?text=Bonjour, je souhaite commander des craies scolaires."
                  className="btn-primary text-lg px-8 py-4 animate-float"
                >
                  Commander maintenant
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/services" className="btn-secondary text-lg px-8 py-4">
                  Voir nos produits
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: '🏭', text: 'Fabrication locale' },
              { icon: '💰', text: 'Prix imbattables' },
              { icon: '🚚', text: 'Livraison 48h' },
              { icon: '✓', text: 'Qualité garantie' }
            ].map((badge, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{badge.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              La Craie Guinéenne qui Révolutionne l'Éducation
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Nous avons créé Craigui parce que nous en avions assez de voir des écoles payer 
              le prix fort pour des craies importées de qualité douteuse.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: '🔴', title: 'Le Problème', desc: 'Les craies importées sont chères, cassent facilement et ne sont pas adaptées aux conditions locales.', color: 'guinea-red' },
              { icon: '🟡', title: 'Notre Idée', desc: 'Fabriquer des craies right ici en Guinée, avec des matériaux adaptés et un processus de qualité.', color: 'guinea-yellow' },
              { icon: '🟢', title: 'Notre Solution', desc: 'Des craies de qualité supérieure, prix divisés par 2, livrées par quelqu\'un qui comprend les réalités guinéennes.', color: 'guinea-green' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="card p-8 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`text-4xl mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-zinc-900 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '500+', label: 'Écoles livrées' },
                { value: '150K+', label: 'Craies vendues' },
                { value: '3', label: 'Années d\'expérience' },
                { value: '98%', label: 'Clients satisfaits' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Plus de 500 écoles nous font confiance à travers la Guinée
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { name: 'École primaire Hamdallaye', location: 'Conakry', text: 'Depuis que nous commandons chez Craigui, nous avons divisé notre budget craies par 2. La qualité est au rendez-vous !', rating: 5 },
              { name: 'Institut Mamadou Diallo', location: 'Kindia', text: 'Un service rapide et professionnel. Les craies ne cassent plus entre les mains de nos élèves. Merci Craigui !', rating: 5 },
              { name: 'École Franco-Arabe de Ratoma', location: 'Conakry', text: 'Enfin un fournisseur local qui comprend nos besoins. Livraison rapide et prix compétitifs. Je recommande à 100%.', rating: 5 }
            ].map((t, i) => (
              <div key={i} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 text-guinea-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 italic">"{t.text}"</p>
                <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-700">
                  <p className="font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-guinea-red via-guinea-yellow to-guinea-green p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Prêt à rejoindre les écoles qui font confiance à Craigui ?
            </h3>
            <p className="mt-4 text-white/90">
              Contactez-nous maintenant et recevez votre devis gratuit en moins de 24h.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="rounded-xl bg-white px-6 py-3 font-bold text-guinea-red shadow-lg transition-all hover:bg-zinc-100">
                Demander un devis
              </a>
              <a href="https://wa.me/224661862044" className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-green-600">
                WhatsApp direct
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}