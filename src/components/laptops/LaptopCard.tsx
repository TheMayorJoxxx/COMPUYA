import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, Star, AlertCircle } from 'lucide-react';
import { Laptop } from '../../types';
import Button from '../ui/Button';

interface LaptopCardProps {
  laptop: Laptop;
  featured?: boolean;
}

const LaptopCard = ({ laptop, featured = false }: LaptopCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const getConditionLabel = (condition: string) => {
    const labels: Record<string, string> = {
      'new': 'Nuevo',
      'like-new': 'Como nuevo',
      'good': 'Bueno',
      'fair': 'Regular',
      'poor': 'Con detalles'
    };
    return labels[condition] || condition;
  };
  
  const getConditionColor = (condition: string) => {
    const colors: Record<string, string> = {
      'new': 'bg-success-100 text-success-800',
      'like-new': 'bg-primary-100 text-primary-800',
      'good': 'bg-primary-100 text-primary-800',
      'fair': 'bg-warning-100 text-warning-800',
      'poor': 'bg-error-100 text-error-800'
    };
    return colors[condition] || 'bg-secondary-100 text-secondary-800';
  };

  return (
    <div 
      className={`relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-white ${
        featured ? 'border-2 border-primary-500' : ''
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-0 left-0 bg-primary-500 text-white px-2 py-1 text-xs font-semibold z-10">
          Destacado
        </div>
      )}
      
      {/* Favorite button */}
      <button 
        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md z-10 transition-colors hover:bg-gray-100"
        onClick={toggleFavorite}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        <Heart 
          size={18} 
          className={isFavorite ? "fill-error-500 text-error-500" : "text-secondary-400"} 
        />
      </button>
      
      {/* Status indicator */}
      <div className="absolute bottom-3 left-3 z-10">
        {laptop.verified ? (
          <div className="badge-verified flex items-center">
            <CheckCircle size={12} className="mr-1" />
            <span>Verificado</span>
          </div>
        ) : (
          <div className="badge-pending flex items-center">
            <AlertCircle size={12} className="mr-1" />
            <span>Pendiente</span>
          </div>
        )}
      </div>
      
      <Link to={`/laptops/${laptop.id}`} className="block">
        {/* Image container */}
        <div className="relative h-48 bg-gray-100">
          <img 
            src={laptop.images[0] || 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg'} 
            alt={laptop.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="badge-price">
              {formatPrice(laptop.price)}
            </div>
            <div className={`badge ${getConditionColor(laptop.condition)}`}>
              {getConditionLabel(laptop.condition)}
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-1 line-clamp-1">{laptop.title}</h3>
          
          <div className="text-sm text-secondary-600 mb-2 space-y-1">
            <p className="line-clamp-1">
              <span className="font-medium">Marca:</span> {laptop.brand} {laptop.model}
            </p>
            <p className="line-clamp-1">
              <span className="font-medium">Procesador:</span> {laptop.specifications.processor}
            </p>
            <p className="line-clamp-1">
              <span className="font-medium">Memoria:</span> {laptop.specifications.ram}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <div className="flex items-center text-warning-500">
                <Star size={16} className="fill-warning-500" />
                <span className="ml-1 text-secondary-800 font-medium">{laptop.sellerRating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-secondary-500 ml-1">Vendedor</span>
            </div>
            
            <Button 
              variant="primary" 
              size="small"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LaptopCard;