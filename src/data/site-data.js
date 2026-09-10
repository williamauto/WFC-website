// Central data file for Water Fun Club
// All destinations, activities, and sub-destinations

export const SITE = {
  name: 'Water Fun Club',
  url: 'https://waterfunclub.com',
  description: 'Discover the best water activities and tours. Snorkeling, jet ski, kayaking, paddle boarding, efoil and more at the world\'s top water destinations.',
  tagline: 'Find your next water adventure'
};

export const ACTIVITIES = [
  {
    slug: 'snorkeling',
    name: 'Snorkeling',
    shortName: 'Snorkeling',
    description: 'Explore underwater worlds with the best snorkeling spots, tours, and gear guides.',
    icon: '🤿',
    keywords: ['snorkeling', 'snorkel tours', 'snorkeling spots', 'best snorkeling']
  },
  {
    slug: 'surfing',
    name: 'Surfing',
    shortName: 'Surfing',
    description: 'Catch the perfect wave with surf spot guides, lesson recommendations, and conditions reports.',
    icon: '🏄',
    keywords: ['surfing', 'surf lessons', 'surf spots', 'best surfing']
  },
  {
    slug: 'kayaking',
    name: 'Kayaking',
    shortName: 'Kayaking',
    description: 'Paddle through mangroves, along coastlines, and into hidden coves with kayak tour guides.',
    icon: '🛶',
    keywords: ['kayaking', 'kayak tours', 'kayak rental', 'mangrove kayaking', 'night kayak']
  },
  {
    slug: 'paddleboarding',
    name: 'Paddle Boarding',
    shortName: 'Paddle Boarding',
    description: 'Stand-up paddle boarding on calm bays, ocean flats, and scenic waterways.',
    icon: '🏄‍♀️',
    keywords: ['paddle boarding', 'paddle board rental', 'SUP', 'stand up paddle']
  },
  {
    slug: 'jet-ski-rental',
    name: 'Jet Ski',
    shortName: 'Jet Ski',
    description: 'Ride the waves at full throttle with jet ski rentals, tours, and safety guides.',
    icon: '🚤',
    keywords: ['jet ski rental', 'jet ski tours', 'jet ski miami', 'jet ski']
  },
  {
    slug: 'efoil',
    name: 'Efoil',
    shortName: 'Efoil',
    description: 'Fly above the water on an electric hydrofoil board — the newest water sport.',
    icon: '⚡',
    keywords: ['efoil', 'efoil rental', 'efoil lessons', 'electric hydrofoil']
  },
  {
    slug: 'electric-powered',
    name: 'Electric Powered',
    shortName: 'Electric Boats',
    description: 'Silent, eco-friendly electric boats, jet skis, and go-boats for exploring waterways.',
    icon: '🔋',
    keywords: ['electric boat', 'go boat', 'electric jet ski', 'electric watercraft']
  }
];

export const DESTINATIONS = [
  {
    slug: 'florida',
    name: 'Florida',
    state: 'Florida',
    description: 'From Miami\'s vibrant coastline to the laid-back Florida Keys, Florida is America\'s water playground.',
    regions: ['miami', 'florida-keys']
  },
  {
    slug: 'hawaii',
    name: 'Hawaii',
    state: 'Hawaii',
    description: 'Volcanic islands, crystal-clear bays, and world-class snorkeling make Hawaii a water paradise.',
    regions: ['oahu', 'maui']
  },
  {
    slug: 'puerto-rico',
    name: 'Puerto Rico',
    state: 'Puerto Rico',
    description: 'Bioluminescent bays, pristine snorkeling coves, and Caribbean charm in Puerto Rico.',
    regions: ['san-juan', 'culebra', 'vieques']
  }
];

export const REGIONS = [
  {
    slug: 'miami',
    name: 'Miami',
    state: 'Florida',
    stateSlug: 'florida',
    description: 'Miami\'s beaches, bays, and waterways offer every water activity imaginable — from jet ski rentals on South Beach to snorkeling in Biscayne National Park.',
    subDestinations: [
      { slug: 'south-beach', name: 'South Beach', description: 'Iconic Art Deco beaches with jet ski rentals and parasailing' },
      { slug: 'biscayne-national-park', name: 'Biscayne National Park', description: 'Protected bay waters with world-class snorkeling and kayaking' },
      { slug: 'key-biscayne', name: 'Key Biscayne', description: 'Tropical island escape with calm snorkeling and kayaking waters' },
      { slug: 'bayside', name: 'Bayside', description: 'Downtown Miami waterfront with boat tours and sunset cruises' },
      { slug: 'star-island', name: 'Star Island', description: 'Celebrity homes boat tour route through Millionaires Row' },
      { slug: 'haulover', name: 'Haulover', description: 'North Miami beach known for jet ski rentals and water sports' },
      { slug: 'brickell', name: 'Brickell', description: 'Miami\'s financial district waterfront with jet ski access' },
      { slug: 'sunny-isles', name: 'Sunny Isles', description: 'Quiet beach community with jet ski and water sport rentals' },
      { slug: 'oleta-river', name: 'Oleta River', description: 'Florida\'s urban wilderness with mangrove kayaking trails' },
      { slug: 'virginia-key', name: 'Virginia Key', description: 'Nature preserve with kayaking and paddle boarding' }
    ]
  },
  {
    slug: 'florida-keys',
    name: 'Florida Keys',
    state: 'Florida',
    stateSlug: 'florida',
    description: 'A 120-mile island chain with the only living coral barrier reef in the continental US.',
    subDestinations: [
      { slug: 'key-largo', name: 'Key Largo', description: 'Dive capital of the world with John Pennekamp Coral Reef State Park' },
      { slug: 'key-west', name: 'Key West', description: 'Southernmost point with night kayaking and mangrove tours' },
      { slug: 'islamorada', name: 'Islamorada', description: 'Sportfishing capital with kayak tours through mangrove islands' }
    ]
  },
  {
    slug: 'oahu',
    name: 'Oahu',
    state: 'Hawaii',
    stateSlug: 'hawaii',
    description: 'The Gathering Place — home to Waikiki, the North Shore, and Hawaii\'s most famous snorkeling spots.',
    subDestinations: [
      { slug: 'honolulu', name: 'Honolulu', description: 'Capital city with Waikiki Beach and urban water activities' },
      { slug: 'waikiki', name: 'Waikiki', description: 'World-famous beach with snorkeling, surfing, and sunset cruises' },
      { slug: 'hanauma-bay', name: 'Hanauma Bay', description: 'Protected marine sanctuary — Oahu\'s most famous snorkeling spot' },
      { slug: 'north-shore', name: 'North Shore', description: 'Legendary surf coast with Sharks Cove snorkeling' },
      { slug: 'kaneohe', name: 'Kaneohe', description: 'Windward side with sandbar tours and calm bay waters' },
      { slug: 'kuilima-cove', name: 'Kuilima Cove', description: 'North Shore cove with beginner-friendly snorkeling' }
    ]
  },
  {
    slug: 'maui',
    name: 'Maui',
    state: 'Hawaii',
    stateSlug: 'hawaii',
    description: 'The Valley Isle — home to Molokini Crater, Kaanapali Beach, and legendary snorkeling.',
    subDestinations: [
      { slug: 'kaanapali', name: 'Kaanapali', description: 'Resort coast with calm snorkeling waters' },
      { slug: 'molokini', name: 'Molokini Crater', description: 'Volcanic atoll with world-class snorkeling' },
      { slug: 'lahaina', name: 'Lahaina', description: 'Historic whaling town with boat tours' }
    ]
  },
  {
    slug: 'san-juan',
    name: 'San Juan',
    state: 'Puerto Rico',
    stateSlug: 'puerto-rico',
    description: 'Puerto Rico\'s capital with historic forts, urban beaches, and water activities.',
    subDestinations: [
      { slug: 'condado', name: 'Condado', description: 'Beachfront district with paddle boarding and jet ski' },
      { slug: 'old-san-juan', name: 'Old San Juan', description: 'Historic walled city with harbor boat tours' },
      { slug: 'isla-verde', name: 'Isla Verde', description: 'Resort beach area with water sports' }
    ]
  },
  {
    slug: 'culebra',
    name: 'Culebra',
    state: 'Puerto Rico',
    stateSlug: 'puerto-rico',
    description: 'Offshore island with Flamenco Beach — consistently ranked among the world\'s best beaches.',
    subDestinations: [
      { slug: 'flamenco-beach', name: 'Flamenco Beach', description: 'World-famous white sand beach with snorkeling' }
    ]
  },
  {
    slug: 'vieques',
    name: 'Vieques',
    state: 'Puerto Rico',
    stateSlug: 'puerto-rico',
    description: 'Island known for Mosquito Bay — the brightest bioluminescent bay in the world.',
    subDestinations: [
      { slug: 'mosquito-bay', name: 'Mosquito Bay', description: 'Brightest bioluminescent bay — night kayaking' }
    ]
  }
];

// Activity availability per region (which activities are offered where)
export const REGION_ACTIVITIES = {
  'miami': ['snorkeling', 'kayaking', 'jet-ski-rental', 'efoil', 'paddleboarding', 'surfing', 'electric-powered'],
  'florida-keys': ['snorkeling', 'kayaking', 'jet-ski-rental', 'paddleboarding'],
  'oahu': ['snorkeling', 'surfing', 'kayaking', 'paddleboarding', 'efoil', 'electric-powered'],
  'maui': ['snorkeling', 'surfing', 'kayaking', 'paddleboarding', 'efoil'],
  'san-juan': ['snorkeling', 'kayaking', 'jet-ski-rental', 'paddleboarding', 'surfing'],
  'culebra': ['snorkeling', 'kayaking', 'paddleboarding'],
  'vieques': ['snorkeling', 'kayaking']
};

// Sub-destination activity availability
export const SUBDESTINATION_ACTIVITIES = {
  'south-beach': ['jet-ski-rental', 'parasailing', 'paddleboarding', 'surfing', 'snorkeling'],
  'biscayne-national-park': ['snorkeling', 'kayaking', 'paddleboarding', 'electric-powered'],
  'key-biscayne': ['snorkeling', 'kayaking', 'paddleboarding'],
  'bayside': ['electric-powered', 'kayaking'],
  'star-island': ['electric-powered'],
  'haulover': ['jet-ski-rental', 'paddleboarding'],
  'brickell': ['jet-ski-rental'],
  'sunny-isles': ['jet-ski-rental', 'paddleboarding'],
  'oleta-river': ['kayaking', 'paddleboarding'],
  'virginia-key': ['kayaking', 'paddleboarding'],
  'key-largo': ['snorkeling', 'kayaking', 'paddleboarding'],
  'key-west': ['kayaking', 'snorkeling', 'jet-ski-rental', 'paddleboarding'],
  'islamorada': ['kayaking', 'snorkeling'],
  'honolulu': ['snorkeling', 'surfing', 'kayaking', 'paddleboarding'],
  'waikiki': ['snorkeling', 'surfing', 'kayaking', 'paddleboarding', 'efoil', 'electric-powered'],
  'hanauma-bay': ['snorkeling'],
  'north-shore': ['snorkeling', 'surfing'],
  'kaneohe': ['snorkeling', 'kayaking', 'electric-powered'],
  'kuilima-cove': ['snorkeling'],
  'kaanapali': ['snorkeling', 'surfing', 'paddleboarding'],
  'molokini': ['snorkeling'],
  'lahaina': ['snorkeling', 'kayaking', 'electric-powered'],
  'condado': ['paddleboarding', 'jet-ski-rental', 'surfing'],
  'old-san-juan': ['electric-powered', 'kayaking'],
  'isla-verde': ['jet-ski-rental', 'paddleboarding', 'surfing'],
  'flamenco-beach': ['snorkeling', 'kayaking', 'paddleboarding'],
  'mosquito-bay': ['kayaking']
};

// Helper functions
export function getRegion(slug) {
  return REGIONS.find(r => r.slug === slug);
}

export function getSubDestination(regionSlug, subSlug) {
  const region = getRegion(regionSlug);
  if (!region) return null;
  return region.subDestinations.find(s => s.slug === subSlug);
}

export function getActivity(slug) {
  return ACTIVITIES.find(a => a.slug === slug);
}

export function getActivitiesForSubDestination(regionSlug, subSlug) {
  const key = subSlug;
  const slugs = SUBDESTINATION_ACTIVITIES[key] || [];
  return slugs.map(s => getActivity(s)).filter(Boolean);
}

export function getActivitiesForRegion(regionSlug) {
  const slugs = REGION_ACTIVITIES[regionSlug] || [];
  return slugs.map(s => getActivity(s)).filter(Boolean);
}