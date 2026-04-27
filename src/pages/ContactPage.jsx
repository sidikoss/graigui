import { useState } from 'react'
import { SEOHead, pageMeta } from '../components/seo/SEOMeta'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

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
              
              <div className="card p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}