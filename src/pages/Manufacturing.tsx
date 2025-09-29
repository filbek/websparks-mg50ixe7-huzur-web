import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Manufacturing: React.FC = () => {
  const processes = [
    {
      step: '01',
      title: 'Design & Planning',
      description: 'Our expert designers create detailed specifications and patterns based on your requirements.',
      icon: 'bi-pencil-square'
    },
    {
      step: '02',
      title: 'Material Selection',
      description: 'We source only the finest leather materials from trusted suppliers worldwide.',
      icon: 'bi-layers'
    },
    {
      step: '03',
      title: 'Cutting & Preparation',
      description: 'Precision cutting using advanced machinery and traditional hand techniques.',
      icon: 'bi-scissors'
    },
    {
      step: '04',
      title: 'Crafting & Assembly',
      description: 'Skilled artisans carefully assemble each piece with meticulous attention to detail.',
      icon: 'bi-tools'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Rigorous quality checks ensure every product meets our high standards.',
      icon: 'bi-shield-check'
    },
    {
      step: '06',
      title: 'Finishing & Packaging',
      description: 'Final touches and professional packaging for safe delivery to your location.',
      icon: 'bi-box-seam'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary">
              Leather Manufacturing Services
            </h1>
            <p className="text-xl text-primary-200 max-w-4xl mx-auto leading-relaxed">
              From concept to completion, we provide comprehensive leather manufacturing services 
              for jackets, bags, and accessories with unmatched quality and precision.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary-900">
              Get Manufacturing Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900">
                Complete Manufacturing Solutions
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We offer end-to-end manufacturing services for leather goods, from initial design 
                consultation to final product delivery. Our state-of-the-art facility in Turkey 
                combines traditional craftsmanship with modern technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="bi bi-check-circle text-primary-500 text-xl"></i>
                  <span className="text-secondary-700">Custom Design Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="bi bi-check-circle text-primary-500 text-xl"></i>
                  <span className="text-secondary-700">Prototype Creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="bi bi-check-circle text-primary-500 text-xl"></i>
                  <span className="text-secondary-700">Bulk Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="bi bi-check-circle text-primary-500 text-xl"></i>
                  <span className="text-secondary-700">Quality Assurance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing facility" 
                className="rounded-3xl shadow-2xl"
                crossOrigin="anonymous"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Every product goes through our carefully designed 6-step process to ensure 
              exceptional quality and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors">
                  {process.step}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                    <i className={`${process.icon} text-2xl text-primary-500 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">{process.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{process.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our advanced facility and skilled workforce enable us to handle projects of any scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-speedometer2 text-3xl text-primary-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">10,000+</h3>
              <p className="text-secondary-600">Units per Month</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-people text-3xl text-primary-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">50+</h3>
              <p className="text-secondary-600">Skilled Workers</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-clock text-3xl text-primary-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">15-30</h3>
              <p className="text-secondary-600">Days Lead Time</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-globe text-3xl text-primary-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">50+</h3>
              <p className="text-secondary-600">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Contact us today to discuss your leather manufacturing needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary-900">
              Request Quote
            </Button>
            <Button size="lg" variant="secondary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manufacturing
