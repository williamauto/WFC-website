// Schema.org JSON-LD builders for Water Fun Club
import { SITE } from './site-data';

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.url ? `${SITE.url}${item.url}` : undefined
    }))
  };
}

export function buildTouristDestinationSchema({ name, description, url, activities = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name,
    description,
    url: `${SITE.url}${url}`,
    touristType: activities.map(a => a.name),
    includesAttraction: activities.map(a => ({
      '@type': 'TouristAttraction',
      name: `${a.name} in ${name}`,
      url: `${SITE.url}${url}${a.slug}/`
    }))
  };
}

export function buildServiceSchema({ name, description, url, provider, areaServed, offers }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${url}`,
    provider: provider ? {
      '@type': 'LocalBusiness',
      name: provider
    } : undefined,
    areaServed: {
      '@type': 'Place',
      name: areaServed
    },
    ...(offers ? { offers } : {})
  };
}

export function buildTouristAttractionSchema({ name, description, url, address, geo, openingHours, priceRange }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name,
    description,
    url: `${SITE.url}${url}`,
    ...(address ? { address: { '@type': 'PostalAddress', addressLocality: address } } : {}),
    ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
    ...(openingHours ? { openingHours } : {}),
    ...(priceRange ? { priceRange } : {})
  };
}

export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };
}

export function buildLocalBusinessSchema({ name, description, url, address, rating, reviewCount, priceRange }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url: `${SITE.url}${url}`,
    ...(address ? { address: { '@type': 'PostalAddress', addressLocality: address } } : {}),
    ...(rating ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount
      }
    } : {}),
    ...(priceRange ? { priceRange } : {})
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}