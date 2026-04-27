import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppLeadCapture from './WhatsAppLeadCapture'

const PRICING_TIERS = [
  { min: 1, max: 5, price: 45000, label: 'Standard' },
  { min: 6, max: 20, price: 40000, label: 'Établissement' },
  { min: 21, max: 100, price: 35000, label: 'Grossiste' },
  { min: 101, max: Infinity, price: 32000, label: 'Partenaire' }
]

export default function QuoteCalculator() {
  const [quantity, setQuantity] = useState(10)
  const [delivery, setDelivery] = useState('conakry')

  const stats = useMemo(() => {
    const tier = PRICING_TIERS.find(t => quantity >= t.min && quantity <= t.max) || PRICING_TIERS[0]
    const unitPrice = tier.price
    const subtotal = quantity * unitPrice
    const deliveryFee = delivery === 'conakry' ? 15000 : 50000
    const total = subtotal + deliveryFee
    
    return { unitPrice, subtotal, deliveryFee, total, label: tier.label }
  }, [quantity, delivery])

  const formatPrice = (price) => new Intl.NumberFormat('fr-GN').format(price) + ' GNF'

  return (
    <div className="card p-8 border-guinea-red/20 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 shadow-xl">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="text-guinea-red">📊</span> Estimateur de Devis
      </h3>

      <div className="space-y-8">
        {/* Quantity Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-semibold text-zinc-700 dark:text-zinc-300">Quantité (Paquets)</label>
            <span className="text-guinea-red font-bold text-xl">{quantity}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="200" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-guinea-red"
          />
          <div className="flex justify-between text-xs text-zinc-500 mt-2">
            <span>1 paquet</span>
            <span>100+ (Grossiste)</span>
            <span>200+ (Partenaire)</span>
          </div>
        </div>

        {/* Delivery Options */}
        <div>
          <label className="block font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Zone de Livraison</label>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setDelivery('conakry')}
              className={`p-4 rounded-xl border-2 transition-all ${delivery === 'conakry' ? 'border-guinea-red bg-guinea-red/5' : 'border-zinc-200 dark:border-zinc-700'}`}
            >
              <div className="font-bold">Conakry</div>
              <div className="text-xs text-zinc-500">15.000 GNF</div>
            </button>
            <button 
              onClick={() => setDelivery('interieur')}
              className={`p-4 rounded-xl border-2 transition-all ${delivery === 'interieur' ? 'border-guinea-red bg-guinea-red/5' : 'border-zinc-200 dark:border-zinc-700'}`}
            >
              <div className="font-bold">Intérieur</div>
              <div className="text-xs text-zinc-500">50.000 GNF</div>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-zinc-100 dark:bg-zinc-950 rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Prix Unitaire ({stats.label})</span>
            <span className="font-medium text-zinc-900 dark:text-white">{formatPrice(stats.unitPrice)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Sous-total</span>
            <span className="font-medium text-zinc-900 dark:text-white">{formatPrice(stats.subtotal)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-500">Frais de livraison</span>
            <span className="font-medium text-zinc-900 dark:text-white">{formatPrice(stats.deliveryFee)}</span>
          </div>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-zinc-900 dark:text-white">Total Estimé</span>
            <motion.span 
              key={stats.total}
              initial={{ scale: 1.1, color: '#CE1126' }}
              animate={{ scale: 1, color: 'inherit' }}
              className="text-2xl font-black text-guinea-red"
            >
              {formatPrice(stats.total)}
            </motion.span>
          </div>
        </div>

        <WhatsAppLeadCapture 
          quantity={quantity} 
          total={formatPrice(stats.total)} 
          tierLabel={stats.label} 
        />
      </div>
    </div>
  )
}
