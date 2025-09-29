import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '../ui/Logo'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" className="filter brightness-0 invert" />
              <h3 className="text-xl font-bold font-secondary">Huzur Leather</h3>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <i className="bi bi-facebook text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <i className="bi bi-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <i className="bi bi-linkedin text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-secondary-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/leather-jacket-manucaturing-leather-bag-manufacturing-service" className="text-secondary-300 hover:text-white transition-colors">{t('nav.manufacturing')}</Link></li>
              <li><Link to="/recycled-polipropylene-mesh-bag" className="text-secondary-300 hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/contact-us" className="text-secondary-300 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.products')}</h4>
            <ul className="space-y-3">
              <li><Link to="/blog/tag/leather-jacket" className="text-secondary-300 hover:text-white transition-colors">{t('blog.leatherJackets')}</Link></li>
              <li><Link to="/blog/tag/leather-bag" className="text-secondary-300 hover:text-white transition-colors">{t('blog.leatherBags')}</Link></li>
              <li><Link to="/blog/tag/laptop-leather-bag" className="text-secondary-300 hover:text-white transition-colors">{t('blog.laptopBags')}</Link></li>
              <li><Link to="/blog/tag/briefcase-leather-bag" className="text-secondary-300 hover:text-white transition-colors">Briefcases</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="bi bi-geo-alt text-primary-500 mt-1"></i>
                <p className="text-secondary-300 text-sm">{t('footer.address')}</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="bi bi-telephone text-primary-500"></i>
                <p className="text-secondary-300 text-sm">+90 XXX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="bi bi-envelope text-primary-500"></i>
                <p className="text-secondary-300 text-sm">info@huzurleather.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © {currentYear} Huzur Leather. {t('footer.allRightsReserved')}
          </p>
          <p className="text-secondary-400 text-sm mt-4 md:mt-0">
            {t('footer.poweredBy')} <span className="text-accent-500 font-medium">{t('footer.websparksAI')}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
