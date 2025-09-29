import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Products: React.FC = () => {
  const productCategories = [
    {
      title: 'Leather Jackets',
      description: 'Premium leather jackets for fashion and functionality',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      products: ['Biker Jackets', 'Bomber Jackets', 'Classic Jackets', 'Custom Designs']
    },
    {
      title: 'Business Bags',
      description: 'Professional leather bags for modern professionals',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      products: ['Briefcases', 'Messenger Bags', 'Tote Bags', 'Portfolio Cases']
    },
    {
      title: 'Laptop Bags',
      description: 'Protective and stylish laptop carrying solutions',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      products: ['Laptop Sleeves', 'Backpacks', 'Rolling Cases', 'Shoulder Bags']
    },
    {
      title: 'Recycled Mesh Bags',
      description: 'Eco-friendly polypropylene mesh bags',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      products: ['Shopping Bags', 'Storage Bags', 'Produce Bags', 'Custom Sizes']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6">
            Our Product Range
          </h1>
          <p className="text-xl text-secondary-200 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of premium leather goods and eco-friendly alternatives, 
            each crafted with precision and attention to detail.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold font-secondary">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-secondary-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <i className="bi bi-check-circle text-primary-500"></i>
                        <span className="text-secondary-700">{product}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    View Products
                    <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
              Product Features
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Every product in our range is designed with specific features to meet diverse customer needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-shield-check text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Durability</h3>
              <p className="text-secondary-600">
                Built to last with high-quality materials and reinforced construction techniques.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-palette text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Customization</h3>
              <p className="text-secondary-600">
                Personalized designs, colors, and features to match your specific requirements.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-recycle text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Sustainability</h3>
              <p className="text-secondary-600">
                Eco-friendly options including recycled materials and sustainable production methods.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-6">
            Need Custom Products?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            We specialize in creating custom leather goods tailored to your exact specifications and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary-900">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="secondary">
              View Lookbook
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
