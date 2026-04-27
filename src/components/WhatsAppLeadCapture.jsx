import { useState } from 'react'

export default function WhatsAppLeadCapture({ quantity, total, tierLabel }) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', school: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          quantity,
          total,
          tier: tierLabel
        }),
      })

      const data = await response.json()
      if (data.redirectUrl) {
        window.open(data.redirectUrl, '_blank')
      }
    } catch (error) {
      console.error('Erreur lors de la capture du lead:', error)
      // Fallback au lien direct en cas d'erreur API
      window.open(`https://wa.me/224661862044?text=${encodeURIComponent(`Commande de ${quantity} paquets`)}`, '_blank')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-dashed border-guinea-red/30">
      <p className="text-xs font-bold text-guinea-red uppercase tracking-wider">Étape Finale : Vos coordonnées</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Votre Nom"
          className="input-field"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="École / Ville"
          className="input-field"
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="btn-whatsapp w-full py-4 text-lg flex items-center justify-center gap-2"
      >
        {loading ? (
          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          'Confirmer et Ouvrir WhatsApp'
        )}
      </button>
      <p className="text-[10px] text-center text-zinc-500">
        Vos informations sont enregistrées pour nous permettre de vous recontacter en cas de problème de connexion.
      </p>
    </form>
  )
}
