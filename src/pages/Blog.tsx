import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'leather-jacket', name: 'Leather Jackets' },
    { id: 'leather-bag', name: 'Leather Bags' },
    { id: 'laptop-bag', name: 'Laptop Bags' },
    { id: 'general', name: 'General' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Turkey Emerges as New Leather Manufacturing Hub Amid US-China Tariff Tensions',
      excerpt: 'Discover how Turkey is becoming a leading destination for leather manufacturing as global trade dynamics shift.',
      date: '2025-04-10',
      category: 'general',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'turkey-emerges-as-new-leather-manufacturing-hub-amid-us-china-tariff-tensions'
    },
    {
      id: 2,
      title: 'A Trusted Leather Jacket Manufacturer: Huzur Leather',
      excerpt: 'Learn about our commitment to quality and craftsmanship in leather jacket manufacturing.',
      date: '2024-12-12',
      category: 'leather-jacket',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'a-trusted-leather-jacket-manufacturer-huzur-leather'
    },
    {
      id: 3,
      title: 'The Art of Leather Craftsmanship: How We Create Timeless Jackets, Bags, Belts and Shoes',
      excerpt: 'Explore the traditional techniques and modern innovations behind our leather craftsmanship.',
      date: '2024-02-22',
      category: 'general',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'the-art-of-leather-craftsmanship-how-we-create-timeless-jackets-bags-belts-and-shoes'
    },
    {
      id: 4,
      title: 'Discover the Excellence of Leather Bag and Jacket Production in Turkey',
      excerpt: 'Why Turkey has become a global leader in leather goods production and manufacturing.',
      date: '2023-09-03',
      category: 'leather-bag',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'discover-the-excellence-of-leather-bag-and-jacket-production-in-turkey'
    },
    {
      id: 5,
      title: 'Leather Jacket Production: Our Process',
      excerpt: 'A detailed look at our leather jacket production process from design to delivery.',
      date: '2023-06-19',
      category: 'leather-jacket',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'leather-jacket-production-our-process'
    },
    {
      id: 6,
      title: 'Manufacturing Handbag, Laptop, Briefcase Leather Bag',
      excerpt: 'Comprehensive guide to our leather bag manufacturing capabilities and processes.',
      date: '2020-01-13',
      category: 'laptop-bag',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      slug: 'manufacturing-handbag-laptop-briefcase-leather-bag'
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6">
            Leather Manufacturing Blog
          </h1>
          <p className="text-xl text-secondary-200 max-w-4xl mx-auto leading-relaxed">
            Insights, tips, and stories from the world of leather manufacturing. 
            Stay updated with industry trends and our latest innovations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} hover className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-secondary-500 mb-3">
                    <i className="bi bi-calendar"></i>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Link 
                    to={`/blog/2025/04/10/${post.slug}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group"
                  >
                    Read More
                    <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Subscribe to our newsletter for the latest insights on leather manufacturing and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
