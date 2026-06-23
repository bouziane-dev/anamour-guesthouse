export const siteInfo = {
  name: 'Anamour',
  subtitle: 'Authentic Guest House',
  description:
    'Experience warm Saharan hospitality, traditional architecture, calm rooms, homemade food, and guided local experiences in the heart of Ghardaïa.',
  phone: '+213 000 00 00 00',
  whatsapp: '+213 000 00 00 00',
  email: 'contact@darelghardaia.com',
  address: 'Ghardaïa, Algeria'
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/activities', label: 'Activities' },
  { href: '/food', label: 'Food' },
  { href: '/home-tour', label: 'Home Tour' },
  { href: '/location', label: 'Location' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export const prototypeRooms = [
  {
    id: 'standard-double-room',
    name: 'Standard Double Room',
    shortDescription: 'A calm and comfortable room for two guests.',
    description:
      'A warm double room inspired by traditional Saharan simplicity, designed for comfort after a day exploring Ghardaïa.',
    capacity: 2,
    nightlyPrice: 8000,
    currency: 'DZD',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    amenities: ['WiFi', 'Air conditioning', 'Private bathroom']
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    shortDescription: 'Spacious stay for families or small groups.',
    description:
      'A larger suite with a welcoming layout, ideal for families who want comfort, privacy, and a traditional guest house feeling.',
    capacity: 4,
    nightlyPrice: 14000,
    currency: 'DZD',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    amenities: ['WiFi', 'Breakfast', 'Private bathroom', 'Extra beds']
  },
  {
    id: 'garden-view-room',
    name: 'Garden View Room',
    shortDescription: 'Peaceful room with a relaxing view.',
    description:
      'A bright room overlooking quiet inner spaces, perfect for guests seeking rest and a slower rhythm.',
    capacity: 2,
    nightlyPrice: 10000,
    currency: 'DZD',
    image:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    amenities: ['WiFi', 'Tea corner', 'Air conditioning']
  }
]

export const galleryImages = [
  {
    title: 'Traditional Courtyard',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Calm Guest Room',
    category: 'Rooms',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Local Breakfast',
    category: 'Food',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Old Town Walk',
    category: 'Activities',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
  }
]

export const activities = [
  {
    title: 'Old Town Guided Visit',
    description:
      'Discover narrow streets, traditional architecture, local history, and the rhythm of the city with a local guide.',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Traditional Market Tour',
    description:
      'Explore local products, crafts, spices, fabrics, and the everyday life of Ghardaïa.',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Tea Experience',
    description:
      'Enjoy a calm traditional tea moment in the guest house, prepared with care and hospitality.',
    image:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80'
  }
]

export const foodItems = [
  {
    title: 'Traditional Breakfast',
    description:
      'Start your day with homemade bread, dates, honey, tea, and local flavors.'
  },
  {
    title: 'Homemade Dinner',
    description:
      'Enjoy warm dishes prepared with seasonal ingredients and family-style hospitality.'
  },
  {
    title: 'Tea & Dates',
    description:
      'A simple but essential Saharan welcome moment served in a calm atmosphere.'
  }
]
