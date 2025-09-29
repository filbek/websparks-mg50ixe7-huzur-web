import React from 'react'
import Card from '../components/ui/Card'

const AboutUs: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary">
                About Huzur Leather
              </h1>
              <p className="text-xl text-secondary-200 leading-relaxed">
                For over two decades, we have been at the forefront of leather manufacturing in Turkey, 
                combining traditional craftsmanship with modern innovation to create exceptional leather goods.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Leather workshop" 
                className="rounded-3xl shadow-2xl"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Craftsman at work" 
                className="rounded-3xl shadow-xl"
                crossOrigin="anonymous"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900">
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Founded in Istanbul, Turkey, Huzur Leather began as a small family workshop with a passion 
                for creating beautiful leather goods. Today, we have grown into one of Turkey&apos;s leading 
                leather manufacturers, serving clients worldwide while maintaining our commitment to quality 
                and craftsmanship.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our journey has been marked by continuous innovation, investment in modern technology, 
                and an unwavering dedication to preserving the traditional techniques that make our 
                products truly exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-heart text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Passion</h3>
              <p className="text-secondary-600">
                Every piece we create is infused with our passion for leather craftsmanship and attention to detail.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-award text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Quality</h3>
              <p className="text-secondary-600">
                We never compromise on quality, using only the finest materials and proven techniques.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-people text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Trust</h3>
              <p className="text-secondary-600">
                Building lasting relationships with our clients through transparency and reliability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Meet the skilled professionals who bring decades of experience to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Master craftsman" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                crossOrigin="anonymous"
              />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Master Craftsman</h3>
              <p className="text-primary-500 mb-4">Lead Designer</p>
              <p className="text-secondary-600 text-sm">
                Over 30 years of experience in leather crafting and design innovation.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Quality manager" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                crossOrigin="anonymous"
              />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Quality Manager</h3>
              <p className="text-primary-500 mb-4">Quality Assurance</p>
              <p className="text-secondary-600 text-sm">
                Ensures every product meets our rigorous quality standards and specifications.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Production manager" 
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                crossOrigin="anonymous"
              />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Production Manager</h3>
              <p className="text-primary-500 mb-4">Operations</p>
              <p className="text-secondary-600 text-sm">
                Oversees efficient production processes while maintaining quality excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
