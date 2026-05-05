import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sinchon-sulbi.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://sinchon-sulbi.com/reviews', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://sinchon-sulbi.com/누수탐지', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sinchon-sulbi.com/하수구막힘', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sinchon-sulbi.com/씽크대막힘', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sinchon-sulbi.com/변기막힘', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sinchon-sulbi.com/소방배관', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sinchon-sulbi.com/언수도녹임', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sinchon-sulbi.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
