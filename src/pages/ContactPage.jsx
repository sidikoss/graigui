import { useState } from 'react'
import { SEOHead, pageMeta } from '../components/seo/SEOMeta'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const meta = pageMeta['/contact']
  const [formData, setFormData] = useState({ name: '', email: '', school: '', quantity: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const message = `Bonjour, je suis ${formData.name} de ${formData.school}. Je souhaite commander ${formData.quantity} de craies. Message: ${formData.message}`
    window.open(`https://wa.me/224661862044?text=${encodeURIComponent(message)}`, '_blank')
  }

  const contactMethods = [
    { icon: '📧', title: 'Email', value: 'sidikouzekaba@gmail.com', link: 'mailto:sidikouzekaba@gmail.com' },
    { icon: '💬', title: 'WhatsApp', value: '+224 661 862 044', link: 'https://wa.me/224661862044' },
    { icon: '📍', title: 'Adresse', value: 'Conakry, Guinée', link: null }
  ]

  return (
    <>
      <SEOHead {...meta} />
      <div className="space-y-20 py-12">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
              Parlons de vos Besoins
            </h1>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Nous prenons le temps de comprendre chaque école. 
              Contactez-nous et recevez un devis personnalisé.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Nos Coordonnées
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, i) => method.link ? (
                  <a key={i} href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="card flex items-center gap-4 p-4 hover:border-guinea-red transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-guinea-red/10 text-2xl">{method.icon}</div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{method.title}</p>
                      <p className="text-zinc-600 dark:text-zinc-400">{method.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="card flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-guinea-yellow/10 text-2xl">{method.icon}</div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{method.title}</p>
                      <p className="text-zinc-600 dark:text-zinc-400">{method.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>Lundi — Vendredi : 8h00 — 18h00</p>
                  <p>Samedi : 9h00 — 14h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Envoyez-nous un Message
              </h2>
              
              {submitted ? (
                <div className="card p-8 text-center bg-guinea-green/10 border-guinea-green">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-guinea-green">Message envoyé !</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    Nous avons ouvert WhatsApp pour finaliser votre commande. 
                    Nous vous répondrons sous 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Votre nom *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Ex: Mamadou Diallo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="votre@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">École / Organisation *</label>
                    <input type="text" name="school" required value={formData.school} onChange={handleChange} className="input-field" placeholder="Nom de votre établissement" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Quantité souhaitée</label>
                    <select name="quantity" value={formData.quantity} onChange={handleChange} className="input-field">
                      <option value="">Sélectionnez une quantité</option>
                      <option value="1-5 paquets">1 à 5 paquets</option>
                      <option value="5-10 paquets">5 à 10 paquets</option>
                      <option value="10-20 paquets">10 à 20 paquets</option>
                      <option value="20+ paquets">20+ paquets (gros)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="input-field resize-none" placeholder="Décrivez vos besoins..." />
                  </div>
                  <button type="submit" className="btn-whatsapp w-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Commander via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}