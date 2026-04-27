import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const pageMeta = {
  '/': {
    title: 'Craigui | Craies Scolaires de Qualité en Guinée',
    description: 'Fabrication et vente de craies scolaires de qualité au meilleur prix en Guinée. Livraison dans toute la Guinée. Made in Guinea.',
    keywords: 'craies scolaires, guinée, conakry, craies qualité, fournitures scolaires, fabrication locale'
  },
  '/services': {
    title: 'Nos Craies | Craigui - Craies Scolaires de Qualité',
    description: 'Découvrez notre gamme complète de craies scolaires : blanches, colorées, effaçables et kits école. Prix gros et détail. Livraison en Guinée.',
    keywords: 'craies blanches, craies colorées, craies effaçables, kit école, fournitures scolaires guinée'
  },
  '/about': {
    title: 'À Propos | Craigui - Notre Histoire',
    description: 'Découvrez l\'histoire de Craigui : fabrication locale de craies scolaires de qualité en Guinée. Notre mission, nos valeurs et notre engagement.',
    keywords: 'à propos craigui, fabrication craies guinée, notre histoire, mission craies scolaires'
  },
  '/blog': {
    title: 'Blog | Craigui - Conseils et Actualités',
    description: 'Conseils pour choisir vos fournitures scolaires, économies pour écoles, guide complet craies. Actualités Craigui.',
    keywords: 'blog craies scolaires, conseils écoles, économies fournitures, guide craies guinée'
  },
  '/contact': {
    title: 'Contact | Craigui - Commander vos Craies',
    description: 'Contactez Craigui pour commander vos craies scolaires. Devis gratuit, livraison rapide en Guinée. WhatsApp, email, téléphone.',
    keywords: 'contact craigui, commander craies, devis gratuit craies, livraison craies guinée'
  },
  '/legal/mentions': {
    title: 'Mentions Légales | Craigui',
    description: 'Mentions légales du site Craigui - Fabricant de craies scolaires en République de Guinée.',
    keywords: 'mentions légales craigui'
  },
  '/legal/cgv': {
    title: 'Conditions Générales de Vente | Craigui',
    description: 'Conditions générales de vente Craigui - Craies scolaires de qualité en Guinée.',
    keywords: 'cgv craigui, conditions vente, conditions générales'
  },
  '/legal/confidentialite': {
    title: 'Politique de Confidentialité | Craigui',
    description: 'Politique de confidentialité Craigui - Protection de vos données personnelles.',
    keywords: 'confidentialité craigui, protection données'
  }
}

function usePageMeta() {
  const context = useOutletContext()
  const path = context?.currentPath || window.location.pathname
  return pageMeta[path] || pageMeta['/']
}

function SEOHead({ title, description, keywords }) {
  useEffect(() => {
    document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.content = description
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) metaKeywords.content = keywords
  }, [title, description, keywords])
  
  return null
}

export { SEOHead, usePageMeta, pageMeta }