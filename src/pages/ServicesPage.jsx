import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Craies Blanches Standard',
    description: 'Les craies blanches classiques pour tableau noir. Idéales pour un usage quotidien en classe.',
    price: 'À partir de 5 000 GNF',
    priceNote: 'le paquet de 50',
    features: ['Ne cassent pas facilement', 'Poussière minimale', 'Écriture fluide'],
    color: 'bg-zinc-100'
  },
  {
    id: 2,
    name: 'Craies Colorées (6 couleurs)',
    description: 'Set de 6 couleurs vives pour attirer l\'attention des élèves et rendre les cours plus visuels.',
    price: 'À partir de 12 000 GNF',
    priceNote: 'le set de 6',
    features: ['Couleurs lumineuses', 'Résistant à l\'humidité', 'Mixable sur tableau'],
    color: 'bg-guinea-yellow'
  },
  {
    id: 3,
    name: 'Craies Effaçables',
    description: 'Craies spéciales pour tableaux blancs. S\'effacent facilement sans trace ni residue.',
    price: 'À partir de 8 000 GNF',
    priceNote: 'le paquet de 24',
    features: ['Effacement parfait', 'Pas de poussière', 'Durent plus longtemps'],
    color: 'bg-guinea-green'
  },
  {
    id: 4,
    name: 'Kit École Complet',
    description: 'Kit complet pour établissements scolaires : blanches + colorées + effaçables. Économie garantie.',
    price: 'À partir de 45 000 GNF',
    priceNote: 'kit complet',
    features: ['Tout en un', 'Prix économique', 'Quantité classe entière'],
    color: 'bg-guinea-red'
  }
]

const faq = [
  {
    q: 'Comment passer commande ?',
    a: 'Vous pouvez nous contacter par WhatsApp au +224 661 862 044 ou par email à sidikouzekaba@gmail.com. Nous vous enverrons un devis sous 24h.'
  },
  {
    q: 'Livrez-vous dans toute la Guinée ?',
    a: 'Oui ! Nous livrons à Conakry et dans les principales villes de Guinée. Les frais de livraison sont discutés lors de la commande.'
  },
  {
    q: 'Quels sont les délais de livraison ?',
    a: 'Pour Conakry : 24 à 48h. Pour les autres villes : 3 à 5 jours selon la localisation.'
  },
  {
    q: 'Acceptez-vous les paiements par Orange Money ?',
    a: 'Oui, nous acceptons Orange Money, MTN et les paiements en espèces. Contactez-nous pour les modalités.'
  },
  {
    q: 'Offrez-vous des prix pour les grosses commandes ?',
    a: 'Absolument ! Plus la quantité est grande, plus les prix sont avantageux. Demandez votre devis personnalisé.'
  }
]

export default function ServicesPage() {
  return (
    <div className="space-y-20 py-12">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
            Des Craies qui Respectent Vos Élèves et Votre Budget
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Chaque craie est fabriquée avec soin pour garantir qualité et durabilité. 
            Découvrez notre gamme complète.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="card overflow-hidden">
              <div className={`h-48 ${product.color} flex items-center justify-center`}>
                <div className="text-6xl">✏️</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{product.name}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{product.description}</p>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                        <svg className="h-4 w-4 text-guinea-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-guinea-red">{product.price}</p>
                    <p className="text-sm text-zinc-500">{product.priceNote}</p>
                  </div>
                  <Link to="/contact" className="btn-primary">
                    Commander
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-900">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Grille Tarifaire — Prix GROS
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Commandez en grande quantité pour bénéficier de nos meilleurs tarifs
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-300 dark:border-zinc-700">
                  <th className="py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Produit</th>
                  <th className="py-3 text-center text-sm font-semibold text-zinc-900 dark:text-white">Prix unitaire</th>
                  <th className="py-3 text-center text-sm font-semibold text-zinc-900 dark:text-white">Quantité min.</th>
                  <th className="py-3 text-center text-sm font-semibold text-guinea-red">Prix GROS</th>
                </tr>
              </thead>
              <tbody className="text-sm text-zinc-600 dark:text-zinc-400">
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3">Craies Blanches (paquet 50)</td>
                  <td className="py-3 text-center">5 000 GNF</td>
                  <td className="py-3 text-center">10 paquets</td>
                  <td className="py-3 text-center font-bold text-guinea-green">40 000 GNF</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3">Craies Colorées (set 6)</td>
                  <td className="py-3 text-center">12 000 GNF</td>
                  <td className="py-3 text-center">5 sets</td>
                  <td className="py-3 text-center font-bold text-guinea-green">50 000 GNF</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="py-3">Craies Effaçables (paquet 24)</td>
                  <td className="py-3 text-center">8 000 GNF</td>
                  <td className="py-3 text-center">10 paquets</td>
                  <td className="py-3 text-center font-bold text-guinea-green">65 000 GNF</td>
                </tr>
                <tr>
                  <td className="py-3">Kit École Complet</td>
                  <td className="py-3 text-center">45 000 GNF</td>
                  <td className="py-3 text-center">3 kits</td>
                  <td className="py-3 text-center font-bold text-guinea-green">120 000 GNF</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link to="/contact" className="btn-primary">
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Comment Commander ?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { step: 1, title: 'Contactez-nous', desc: 'Par WhatsApp, email ou formulaire' },
            { step: 2, title: 'Recevez votre devis', desc: 'Sous 24h, avec les prix et délais' },
            { step: 3, title: 'Confirmez la commande', desc: 'Validation et paiement' },
            { step: 4, title: 'Livraison rapide', desc: 'Recevez vos craies en 48h' }
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-guinea-red text-xl font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 font-bold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-8">
            Questions Fréquentes
          </h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="border-b border-zinc-200 pb-6 dark:border-zinc-800 last:border-0">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.q}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-guinea-green/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-guinea-green">
            Garantie Qualité — Satisfait ou Remboursé
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Nous sommes tellement confiants en la qualité de nos craies que si vous n'êtes 
            pas satisfait, nous vous remboursons. Pas de risque pour vous.
          </p>
          <Link to="/contact" className="mt-6 inline-flex btn-primary">
            Commander sans risque
          </Link>
        </div>
      </section>
    </div>
  )
}