import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Products: React.FC = () => {
  const { t } = useTranslation()

  const products = [
    {
      title: t('products.leatherJackets.title'),
      description: t('products.leatherJackets.description'),
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/blog/tag/leather-jacket',
      features: t('products.leatherJackets.features', { returnObjects: true }) as string[]
    },
    {
      title: t('products.businessBags.title'),
      description: t('products.businessBags.description'),
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/blog/tag/leather-bag',
      features: t('products.businessBags.features', { returnObjects: true }) as string[]
    },
    {
      title: t('products.laptopBags.title'),
      description: t('products.laptopBags.description'),
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/blog/tag/laptop-leather-bag',
      features: t('products.laptopBags.features', { returnObjects: true }) as string[]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary text-secondary-900 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} hover className="overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold font-secondary text-secondary-900 mb-4">{product.title}</h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <i className="bi bi-check-circle text-primary-500"></i>
                      <span className="text-sm text-secondary-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={product.link}>
                  <Button variant="outline" className="w-full group">
                    {t('products.learnMore')}
                    <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/recycled-polipropylene-mesh-bag">
            <Button size="lg">{t('products.viewAllProducts')}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
