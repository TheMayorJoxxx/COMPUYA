import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, CheckCircle2, Shield, Star, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import LaptopCard from '../components/laptops/LaptopCard';
import LaptopGrid from '../components/laptops/LaptopGrid';
import { Laptop } from '../types';
import { mockLaptops } from '../data/mockData';

const HomePage = () => {
  const [featuredLaptops, setFeaturedLaptops] = useState<Laptop[]>([]);
  const [recentLaptops, setRecentLaptops] = useState<Laptop[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simular carga de datos
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filtrar laptops destacadas y recientes
      const featured = mockLaptops.filter(laptop => laptop.featured).slice(0, 3);
      const recent = mockLaptops.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ).slice(0, 6);
      
      setFeaturedLaptops(featured);
      setRecentLaptops(recent);
      setIsLoading(false);
    };
    
    fetchData();
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="https://www.udes.edu.co/images/logo/logo-udes.png" 
                  alt="UDES Logo" 
                  className="h-20 md:h-24"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Compra y vende laptops de segunda mano en la comunidad UDES
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              Plataforma exclusiva para estudiantes, docentes y personal administrativo de la Universidad de Santander.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button 
                  variant="accent" 
                  size="large"
                  leftIcon={<Search size={20} />}
                >
                  Explorar laptops
                </Button>
              </Link>
              <Link to="/create-listing">
                <Button 
                  variant="outline" 
                  size="large"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Publicar un anuncio
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100H1440V0C1440 0 1088 100 720 100C352 100 0 0 0 0V100Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué CompuYa?</h2>
            <p className="text-lg text-secondary-600">
              Creamos un espacio seguro, enfocado en las necesidades exclusivas de nuestra comunidad universitaria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidad Verificada</h3>
              <p className="text-secondary-600">
                Exclusivo para miembros de la comunidad UDES, verificamos todos los usuarios.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Producto Validado</h3>
              <p className="text-secondary-600">
                Todos los anuncios pasan por un proceso de validación para garantizar la calidad.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sistema de Reputación</h3>
              <p className="text-secondary-600">
                Conoce la reputación de vendedores y compradores antes de realizar cualquier transacción.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Laptops Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Laptops destacadas</h2>
              <p className="text-secondary-600">Seleccionadas por su calidad y valor</p>
            </div>
            <Link 
              to="/search?featured=true" 
              className="text-primary-600 hover:text-primary-800 flex items-center"
            >
              Ver todas
              <ChevronRight size={20} />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {featuredLaptops.map(laptop => (
                <LaptopCard key={laptop.id} laptop={laptop} featured={true} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Recent Laptops Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Publicaciones recientes</h2>
              <p className="text-secondary-600">Las últimas laptops disponibles en el mercado</p>
            </div>
            <Link 
              to="/search?sort=newest" 
              className="text-primary-600 hover:text-primary-800 flex items-center"
            >
              Ver todas
              <ChevronRight size={20} />
            </Link>
          </div>
          
          <LaptopGrid 
            laptops={recentLaptops}
            isLoading={isLoading}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
                  <TrendingUp size={16} className="mr-1" />
                  Comunidad en crecimiento
                </div>
                
                <h2 className="text-3xl font-bold mb-4">¿Tienes una laptop que ya no utilizas?</h2>
                <p className="text-lg text-secondary-600 mb-6">
                  Publica tu anuncio hoy mismo y encuentra compradores interesados dentro de la comunidad universitaria.
                </p>
                
                <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
                  <Link to="/create-listing">
                    <Button variant="primary" size="large">
                      Publicar anuncio
                    </Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="outline" size="large">
                      Cómo funciona
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-100">
                <img 
                  src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg" 
                  alt="Estudiante usando laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;