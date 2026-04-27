import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { SEOHead } from '../components/seo/SEOMeta'
import StructuredData from '../components/seo/StructuredData'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Produit non trouvé</h1>
        <Link to="/services" className="btn-primary">Retour aux produits</Link>
      </div>
    )
  }

  return (
    <>
      <SEOHead 
        title={`${product.name} | Craigui`} 
        description={product.description}
      />
      <StructuredData type="Product" data={product} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Image Placeholder */}
          <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-8xl shadow-inner">
            {product.category === 'Blanc' ? '⚪' : product.category === 'Couleurs' ? '🌈' : '💎'}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-guinea-red/10 text-guinea-red text-sm font-bold mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">{product.name}</h1>
              <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="text-3xl font-black text-guinea-red">
              {new Intl.NumberFormat('fr-GN').format(product.price)} GNF
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Caractéristiques :</h3>
              <ul className="grid gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-guinea-green" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href={`https://wa.me/224661862044?text=${encodeURIComponent(`Bonjour, je suis intéressé par le produit : ${product.name}`)}`}
                className="btn-whatsapp flex-1 text-center py-4 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander via WhatsApp
              </a>
              <Link to="/contact" className="btn-secondary flex-1 text-center py-4 text-lg">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
