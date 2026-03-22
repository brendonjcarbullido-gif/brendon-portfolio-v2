export interface Project {
  id: string
  slug: string
  title: string
  client: string
  category: string
  year: string
  mediaType: 'image' | 'video'
  image?: string
  video?: string
  caseStudy: {
    headline: string
    overview: string
    role: string
    deliverables: string[]
    images: string[]
    color: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'anne-klein',
    title: "International Women's Campaign",
    client: 'Anne Klein',
    category: 'Campaign Direction',
    year: '2023',
    mediaType: 'image',
    image: '/images/work/anne-klein.jpg',
    caseStudy: {
      headline: 'Directing Power. Defining a Season.',
      overview:
        "Full creative direction and production of Anne Klein's International Women's Campaign — concept through delivery across digital and print channels.",
      role: 'Creative Director',
      deliverables: ['Campaign Direction', 'Photography', 'Digital', 'Print'],
      images: ['/images/work/anne-klein.jpg'],
      color: '#8B6F47',
    },
  },
  {
    id: '2',
    slug: 'lotto-us',
    title: 'American Branch Launch',
    client: 'Lotto US',
    category: 'Brand Identity',
    year: '2023',
    mediaType: 'video',
    video: '/videos/lotto-us.mp4',
    image: '/images/work/lotto-us.jpg',
    caseStudy: {
      headline: "Launching America's Lotto.",
      overview:
        "Spearheaded the full visual identity for Lotto's American market entry — bridging international brand assets with a new domestic identity.",
      role: 'Creative Director',
      deliverables: ['Visual Identity', 'Brand Launch', 'International Assets'],
      images: ['/images/work/lotto-us.jpg'],
      color: '#6B8E6B',
    },
  },
  {
    id: '3',
    slug: 'teeccino-packaging',
    title: 'Packaging System',
    client: 'Teeccino',
    category: 'Packaging Design',
    year: '2025',
    mediaType: 'image',
    image: '/images/work/teeccino-packaging.jpg',
    caseStudy: {
      headline: 'Heritage Meets Modern Shelf.',
      overview:
        "Contemporary packaging system balancing Teeccino's established brand heritage with modern design sensibility across the full product line.",
      role: 'Art Director',
      deliverables: ['Packaging Design', 'Brand System', 'Print Production'],
      images: ['/images/work/teeccino-packaging.jpg'],
      color: '#8B6F47',
    },
  },
  {
    id: '4',
    slug: 'teeccino-social',
    title: 'Content Ecosystem',
    client: 'Teeccino',
    category: 'Content Direction',
    year: '2024',
    mediaType: 'image',
    image: '/images/work/teeccino-social.jpg',
    caseStudy: {
      headline: '45K Followers. 40% More Engagement.',
      overview:
        "Transformed Teeccino's social presence from infrequent low-quality posts into a cohesive content ecosystem — scaling from 2x to 5x per week as sole creator.",
      role: 'Director of Social Media',
      deliverables: ['Content Strategy', 'Photography', 'Video', 'Social Management'],
      images: ['/images/work/teeccino-social.jpg'],
      color: '#7A8B6F',
    },
  },
  {
    id: '5',
    slug: 'joseph-abboud',
    title: 'Season Campaign',
    client: 'Joseph Abboud',
    category: 'Art Direction',
    year: '2023',
    mediaType: 'video',
    video: '/videos/joseph-abboud.mp4',
    image: '/images/work/joseph-abboud.jpg',
    caseStudy: {
      headline: 'The Craft of a Season.',
      overview:
        "Full art direction and production for Joseph Abboud's seasonal campaign — creative direction, shoot execution, and post-production.",
      role: 'Art Director',
      deliverables: ['Art Direction', 'Photo Production', 'Post-Production'],
      images: ['/images/work/joseph-abboud.jpg'],
      color: '#6B7A8B',
    },
  },
  {
    id: '6',
    slug: 'casa-amour',
    title: 'Brand Identity',
    client: 'Casa Amour Tequila',
    category: 'Visual Identity',
    year: '2023',
    mediaType: 'image',
    image: '/images/work/casa-amour.jpg',
    caseStudy: {
      headline: 'Spirit. Identity. Presence.',
      overview:
        "Complete visual identity and brand direction for Casa Amour Tequila — defining the brand's aesthetic language across all touchpoints.",
      role: 'Creative Director',
      deliverables: ['Visual Identity', 'Brand Direction', 'Campaign'],
      images: ['/images/work/casa-amour.jpg'],
      color: '#8B7A47',
    },
  },
  {
    id: '7',
    slug: 'design-craft',
    title: 'Design Craft',
    client: 'Personal Work',
    category: 'Art Direction',
    year: '2024',
    mediaType: 'image',
    image: '/images/work/design-craft.jpg',
    caseStudy: {
      headline: 'Hand-Crafted Design.',
      overview:
        'A collection of hand-crafted design work, physical samples, and mockups spanning print, packaging, and visual identity.',
      role: 'Art Director',
      deliverables: ['Print Design', 'Mockups', 'Physical Samples'],
      images: ['/images/work/design-craft.jpg'],
      color: '#7A6F5C',
    },
  },
  {
    id: '8',
    slug: 'kloo-coffee',
    title: 'Brand Direction',
    client: 'Kloo Coffee',
    category: 'Creative Direction',
    year: '2023',
    mediaType: 'image',
    image: '/images/work/kloo-coffee.jpg',
    caseStudy: {
      headline: 'Crafting a Coffee Identity.',
      overview:
        'Creative direction and content strategy for Kloo Coffee — defining the brand voice and visual language across digital channels.',
      role: 'Creative Director',
      deliverables: ['Creative Direction', 'Brand Strategy', 'Content'],
      images: ['/images/work/kloo-coffee.jpg'],
      color: '#6B5A47',
    },
  },
]
