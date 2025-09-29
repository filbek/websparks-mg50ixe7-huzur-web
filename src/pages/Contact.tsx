import React, { useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-200 max-w-4xl mx-auto leading-relaxed">
            Ready to start your leather manufacturing project? Get in touch with our expert team 
            for personalized consultation and competitive quotes.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px<think>
I need to continue from where I left off in the Contact page component. I was in the middle of writing the Contact section with the form and contact information. I need to complete the Contact.tsx file and then continue with the remaining files needed for the website.
</think>

-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold font-secondary text-secondary-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+90 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="manufacturing-quote">Manufacturing Quote</option>
                    <option value="custom-design">Custom Design</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="partnership">Partnership</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <i className="bi bi-send ml-2"></i>
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-secondary text-secondary-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                  We are here to help you with all your leather manufacturing needs. 
                  Contact us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-geo-alt text-primary-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Address</h3>
                    <p className="text-secondary-600">
                      Leather Manufacturing District<br />
                      Istanbul, Turkey<br />
                      34000
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-telephone text-primary-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Phone</h3>
                    <p className="text-secondary-600">
                      +90 XXX XXX XXXX<br />
                      +90 XXX XXX XXXX (WhatsApp)
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-envelope text-primary-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Email</h3>
                    <p className="text-secondary-600">
                      info@huzurleather.com<br />
                      sales@huzurleather.com
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-clock text-primary-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Business Hours</h3>
                    <p className="text-secondary-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-secondary-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-secondary-900 mb-6">
              Visit Our Facility
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Located in the heart of Istanbul&apos;s leather manufacturing district, 
              our facility is equipped with modern machinery and skilled craftsmen.
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="w-full h-96 bg-secondary-200 flex items-center justify-center">
              <div className="text-center">
                <i className="bi bi-geo-alt text-4xl text-secondary-500 mb-4"></i>
                <p className="text-secondary-600">Interactive map will be displayed here</p>
                <p className="text-sm text-secondary-500 mt-2">Istanbul, Turkey - Leather Manufacturing District</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Contact
