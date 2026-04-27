import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvvpzo") // Remplacer par votre ID Formspree réel

  if (state.succeeded) {
    return (
      <div className="card p-8 text-center bg-guinea-green/10 border-guinea-green">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-guinea-green">Message envoyé !</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Nom Complet *
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          required
          className="input-field"
          placeholder="Ex: Mamadou Diallo"
        />
        <ValidationError prefix="Nom" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          className="input-field"
          placeholder="votre@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="school" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          École / Organisation
        </label>
        <input
          id="school"
          type="text" 
          name="school"
          className="input-field"
          placeholder="Nom de votre établissement"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="input-field resize-none"
          placeholder="Comment pouvons-nous vous aider ?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting}
        className="btn-primary w-full py-3 text-lg font-bold disabled:opacity-50 transition-all active:scale-95"
      >
        {state.submitting ? 'Envoi en cours...' : 'Envoyer le Message'}
      </button>
      
      <p className="text-center text-xs text-zinc-500 mt-4">
        En envoyant ce formulaire, vous acceptez d'être recontacté par Craigui.
      </p>
    </form>
  )
}
