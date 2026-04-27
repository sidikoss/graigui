export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, school, quantity, total, phone } = req.body

  // Ici, on pourrait envoyer les données vers Supabase, Google Sheets ou un Email
  console.log('Nouveau Lead Capturé:', { name, school, quantity, total, phone, date: new Date() })

  // Pour l'instant, on simule une sauvegarde réussie
  return res.status(200).json({ 
    success: true, 
    message: 'Lead capturé avec succès',
    redirectUrl: `https://wa.me/224661862044?text=${encodeURIComponent(
      `Bonjour Craigui, je suis ${name} de ${school}. Je souhaite commander ${quantity} paquets. Total estimé: ${total}`
    )}`
  })
}
