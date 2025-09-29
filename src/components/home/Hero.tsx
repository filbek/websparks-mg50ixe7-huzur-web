import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Leather craftsmanship" 
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-800/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Turkey Leader Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-4 py-2">
              <i className="bi bi-award text-accent-500"></i>
              <span className="text-accent-500 font-semibold text-sm">{t('hero.turkeyLeader')}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-secondary text-white leading-tight">
                {t('hero.title')}
                <span className="block text-accent-500">{t('hero.titleAccent')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary-200 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {t('hero.exploreProducts')}
                <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary-900">
                {t('hero.viewLookbook')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">25+</div>
                <div className="text-sm text-secondary-300">{t('hero.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">10K+</div>
                <div className="text-sm text-secondary-300">{t('hero.productsMade')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">50+</div>
                <div className="text-sm text-secondary-300">{t('hero.countriesServed')}</div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="absolute top-0 right-0 w-64 h-80 bg-white/10 backdrop-blur-md rounded-3xl p-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Leather jacket" 
                className="w-full h-48 object-cover rounded-2xl mb-4"
                crossOrigin="anonymous"
              />
              <h3 className="text-white font-semibold mb-2">{t('products.leatherJackets.title')}</h3>
              <p className="text-secondary-300 text-sm">Handcrafted with finest leather</p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-64 h-80 bg-white/10 backdrop-blur-md rounded-3xl p-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Leather bag" 
                className="w-full h-48 object-cover rounded-2xl mb-4"
                crossOrigin="anonymous"
              />
              <h3 className="text-white font-semibold mb-2">{t('products.businessBags.title')}</h3>
              <p className="text-secondary-300 text-sm">Elegant designs for professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
