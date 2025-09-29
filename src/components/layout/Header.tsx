import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import LanguageSwitcher from '../ui/LanguageSwitcher'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about-us' },
    { name: t('nav.manufacturing'), href: '/leather-jacket-manucaturing-leather-bag-manufacturing-service' },
    { name: t('nav.products'), href: '/recycled-polipropylene-mesh-bag' },
    { name: t('nav.blog'), href: '/blog/leather-bag-manufacturing-blog' },
    { name: t('nav.contact'), href: '/contact-us' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Logo size="md" />
            <div>
              <h1 className="text-2xl font-bold font-secondary text-secondary-800">Huzur Leather</h1>
              <p className="text-xs text-secondary-600">{t('hero.turkeyLeader')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  location.pathname === item.href ? 'text-primary-500' : 'text-secondary-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button size="sm">{t('nav.getQuote')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            >
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl text-secondary-700`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl border-t">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors duration-200 hover:text-primary-500 ${
                    location.pathname === item.href ? 'text-primary-500' : 'text-secondary-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4">{t('nav.getQuote')}</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
