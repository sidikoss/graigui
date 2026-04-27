import { useParams, Link } from 'react-router-dom'

const legalContent = {
  mentions: {
    title: 'Mentions Légales',
    content: `
      <h2>1. Informations sur l'éditeur</h2>
      <p><strong>Raison sociale :</strong> Craigui</p>
      <p><strong>Nom du responsable :</strong> Sidiki Zekaba</p>
      <p><strong>Email :</strong> sidikouzekaba@gmail.com</p>
      <p><strong>Téléphone :</strong> +224 661 862 044</p>
      <p><strong>Adresse :</strong> Conakry, République de Guinée</p>

      <h2>2. Hébergement</h2>
      <p>Le site Craigui est hébergé par un prestataire professionnel garantissant la sécurité et la disponibilité du service.</p>

      <h2>3. Propriété intellectuelle</h2>
      <p>L'ensemble du contenu du site Craigui (textes, images, logo, graphismes) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>

      <h2>4. Limitation de responsabilité</h2>
      <p>Les informations contenues sur ce site sont aussi précises que possible. Cependant, Craigui ne saurait être tenu responsable des omissions ou des inexactitudes.</p>
    `
  },
  cgv: {
    title: 'Conditions Générales de Vente',
    content: `
      <h2>1. Objet</h2>
      <p>Les présentes CGV régissent les relations entre Craigui et ses clients pour toute commande de craies scolaires.</p>

      <h2>2. Produits</h2>
      <p>Craigui propose des craies scolaires de qualité supérieure, disponibles en plusieurs catégories :</p>
      <ul>
        <li>Craies blanches standard</li>
        <li>Craies colorées (6 couleurs)</li>
        <li>Craies effaçables</li>
        <li>Kits école complets</li>
      </ul>

      <h2>3. Prix</h2>
      <p>Les prix affichés sont en francs guinéens (GNF) et peuvent être modifiés sans préavis. Les prix promotionnels sont valables pendant la période indiquée.</p>

      <h2>4. Commande</h2>
      <p>Toute commande se fait par contact direct (WhatsApp, email) avec confirmation des quantités, prix et délais de livraison.</p>

      <h2>5. Paiement</h2>
      <p>Nous acceptons :</p>
      <ul>
        <li>Orange Money</li>
        <li>MTN Mobile Money</li>
        <li>Paiement en espèces</li>
      </ul>

      <h2>6. Livraison</h2>
      <p>La livraison est effectuée dans un délai de 24h à 48h pour Conakry et 3 à 5 jours pour les autres villes de Guinée. Les frais de livraison sont确定és lors de la commande.</p>

      <h2>7. Garantie</h2>
      <p>Tous nos produits sont garantis. Si la qualité ne vous convient pas, contactez-nous pour un remplacement ou un remboursement.</p>

      <h2>8. Retour</h2>
      <p>Les retours sont acceptés dans les 7 jours suivant la livraison en cas de défaut de qualité. Les frais de retour sont à notre charge.</p>
    `
  },
  confidentialite: {
    title: 'Politique de Confidentialité',
    content: `
      <h2>1. Collecte des données</h2>
      <p>Nous collectons uniquement les données nécessaires au traitement de votre commande :</p>
      <ul>
        <li>Nom et prénom</li>
        <li>Email</li>
        <li>Téléphone</li>
        <li>Nom de l'école/organisation</li>
        <li>Adresse de livraison (si différente)</li>
      </ul>

      <h2>2. Utilisation des données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Traiter votre commande</li>
        <li>Vous informer de l'état de votre commande</li>
        <li>Vous contacter en cas de besoin</li>
      </ul>

      <h2>3. Protection des données</h2>
      <p>Vos données personnelles sont protégées et ne sont jamais vendues ou partagées avec des tiers à des fins commerciales.</p>

      <h2>4. Cookies</h2>
      <p>Notre site n'utilise pas de cookies de tracking. Nous utilisons uniquement les cookies essentiels au fonctionnement du site.</p>

      <h2>5. Vos droits</h2>
      <p>Conformément à la réglementation, vous avez le droit d'accéder, de corriger et de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous à sidikouzekaba@gmail.com.</p>

      <h2>6. Contact</h2>
      <p>Pour toute question concernant notre politique de confidentialité, contactez-nous :</p>
      <p>Email : sidikouzekaba@gmail.com</p>
      <p>Tél : +224 661 862 044</p>
    `
  }
}

export default function LegalPage() {
  const { type } = useParams()
  const content = legalContent[type] || legalContent.mentions

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-guinea-red hover:underline mb-8">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-8">
        {content.title}
      </h1>

      <div 
        className="prose prose-zinc dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-zinc-900 dark:prose-headings:text-white
          prose-h2:mt-8 prose-h2:mb-4
          prose-p:text-zinc-600 dark:prose-p:text-zinc-400
          prose-li:text-zinc-600 dark:prose-li:text-zinc-400"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />

      <div className="mt-12 rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Dernière mise à jour :</strong> Mars 2024
        </p>
      </div>
    </div>
  )
}