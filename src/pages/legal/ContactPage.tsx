import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="font-medium mb-1">Dirección</h3>
                <p className="text-gray-600">
                  Universidad de Santander<br />
                  Campus Principal<br />
                  Lagos del Cacique<br />
                  Bucaramanga, Colombia
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="font-medium mb-1">Email</h3>
                <a 
                  href="mailto:contacto@compuya.co" 
                  className="text-primary-600 hover:text-primary-700"
                >
                  contacto@compuya.co
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="font-medium mb-1">Teléfono</h3>
                <a 
                  href="tel:+576076000000" 
                  className="text-primary-600 hover:text-primary-700"
                >
                  +57 607 6000000
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;