import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../ui/Card'

const Features: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: 'bi-award',
      title: t('features.premiumQuality.title'),
      description: t('features.premiumQuality.description')
    },
    {
      icon: 'bi-tools',
      title: t('features.expertCraftsmanship.title'),
      description: t('features.expertCraftsmanship.description')
    },
    {
      icon: 'bi-globe',
      title: t('features.globalShipping.title'),
      description: t('features.globalShipping.description')
    },
    {
      icon: 'bi-palette',
      title: t('features.customDesigns.title'),
      description: t('features.customDesigns.description')
    },
    {
      icon: 'bi-shield-check',
      title: t('features.qualityGuarantee.title'),
      description: t('features.qualityGuarantee.description')
    },
    {
      icon: 'bi-lightning',
      title: t('features.fastProduction.title'),
      description: t('features.fastProduction.description')
    }
  ]

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary text-secondary-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="p-8 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <i className={`${feature.icon} text-2xl text-primary-500 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">{feature.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
