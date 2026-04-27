import { useParams, Link } from 'react-router-dom'

const legalContent = {
  mentions: [
    {
      title: '1. Informations sur l\'éditeur',
      text: 'Raison sociale : Craigui'
    },
    {
      title: '1.1 Responsable',
      text: 'Nom du responsable : Sidiki Zekaba'
    },
    {
      title: '1.2 Contact',
      list: ['Email : sidikouzekaba@gmail.com', 'Téléphone : +224 661 862 044', 'Adresse : Conakry, République de Guinée']
    },
    {
      title: '2. Hébergement',
      text: 'Le site Craigui est hébergé par un prestataire professionnel garantissant la sécurité et la disponibilité du service.'
    },
    {
      title: '3. Propriété intellectuelle',
      text: 'L\'ensemble du contenu du site Craigui (textes, images, logo, graphismes) est protégé par le droit d\'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.'
    },
    {
      title: '4. Limitation de responsabilité',
      text: 'Les informations contenues sur ce site sont aussi précises que possible. Cependant, Craigui ne saurait être tenu responsable des omissions ou des inexactitudes.'
    }
  ],
  cgv: [
    {
      title: '1. Objet',
      text: 'Les présentes CGV régissent les relations entre Craigui et ses clients pour toute commande de craies scolaires.'
    },
    {
      title: '2. Produits',
      list: ['Craies blanches standard', 'Craies colorées (6 couleurs)', 'Craies effaçables', 'Kits école complets']
    },
    {
      title: '3. Prix',
      text: 'Les prix affichés sont en francs guinéens (GNF) et peuvent être modifiés sans préavis. Les prix promotionnels sont valables pendant la période indiquée.'
    },
    {
      title: '4. Commande',
      text: 'Toute commande se fait par contact direct (WhatsApp, email) avec confirmation des quantités, prix et délais de livraison.'
    },
    {
      title: '5. Paiement',
      list: ['Orange Money', 'MTN Mobile Money', 'Paiement en espèces']
    },
    {
      title: '6. Livraison',
      text: 'La livraison est effectuée dans un délai de 24h à 48h pour Conakry et 3 à 5 jours pour les autres villes de Guinée. Les frais de livraison sont déterminés lors de la commande.'
    },
    {
      title: '7. Garantie',
      text: 'Tous nos produits sont garantis. Si la qualité ne vous convient pas, contactez-nous pour un remplacement ou un remboursement.'
    },
    {
      title: '8. Retour',
      text: 'Les retours sont acceptés dans les 7 jours suivant la livraison en cas de défaut de qualité. Les frais de retour sont à notre charge.'
    }
  ],
  confidentialite: [
    {
      title: '1. Collecte des données',
      list: ['Nom et prénom', 'Email', 'Téléphone', 'Nom de l\'école/organisation', 'Adresse de livraison (si différente)']
    },
    {
      title: '2. Utilisation des données',
      list: ['Traiter votre commande', 'Vous informer de l\'état de votre commande', 'Vous contacter en cas de besoin']
    },
    {
      title: '3. Protection des données',
      text: 'Vos données personnelles sont protégées et ne sont jamais vendues ou partagées avec des tiers à des fins commerciales.'
    },
    {
      title: '4. Cookies',
      text: 'Notre site n\'utilise pas de cookies de tracking. Nous utilisons uniquement les cookies essentiels au fonctionnement du site.'
    },
    {
      title: '5. Vos droits',
      text: 'Conformément à la réglementation, vous avez le droit d\'accéder, de corriger et de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous.'
    },
    {
      title: '6. Contact',
      list: ['Email : sidikouzekaba@gmail.com', 'Tél : +224 661 862 044']
    }
  ]
}

const titles = {
  mentions: 'Mentions Légales',
  cgv: 'Conditions Générales de Vente',
  confidentialite: 'Politique de Confidentialité'
}

function LegalSection({ section }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{section.title}</h2>
      {section.text && (
        <p className="text-zinc-600 dark:text-zinc-400 mb-2">{section.text}</p>
      )}
      {section.list && (
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function LegalPage() {
  const { type } = useParams()
  const content = legalContent[type] || legalContent.mentions
  const title = titles[type] || titles.mentions

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-guinea-red hover:underline mb-8">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour à l&apos;accueil
      </Link>

      <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-8">
        {title}
      </h1>

      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {content.map((section, i) => (
          <LegalSection key={i} section={section} />
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Dernière mise à jour :</strong> Mars 2024
        </p>
      </div>
    </div>
  )
}