import React from 'react'

export default function StructuredData({ type, data }) {
  let schema = {}

  if (type === 'Organization') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Craigui",
      "alternateName": "Craigui Craies",
      "description": "Premier fabricant de craies scolaires de qualité en République de Guinée.",
      "url": "https://craigui.vercel.app",
      "logo": "https://craigui.vercel.app/favicon.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+224-661-862-044",
        "contactType": "customer service",
        "areaServed": "GN",
        "availableLanguage": "French"
      },
      "sameAs": [
        "https://wa.me/224661862044"
      ]
    }
  }

  if (type === 'Product') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name || "Craies Scolaires Craigui",
      "image": data.image || "https://craigui.vercel.app/favicon.svg",
      "description": data.description || "Craies de qualité supérieure fabriquées localement en Guinée.",
      "brand": {
        "@type": "Brand",
        "name": "Craigui"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://craigui.vercel.app/services",
        "priceCurrency": "GNF",
        "price": data.price || "45000",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Craigui"
        }
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
