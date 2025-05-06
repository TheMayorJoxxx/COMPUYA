import { Laptop } from '../../types';
import LaptopCard from './LaptopCard';
import Spinner from '../ui/Spinner';

interface LaptopGridProps {
  laptops: Laptop[];
  isLoading?: boolean;
  emptyMessage?: string;
  featuredIds?: string[];
}

const LaptopGrid = ({ 
  laptops, 
  isLoading = false, 
  emptyMessage = "No se encontraron laptops",
  featuredIds = []
}: LaptopGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Spinner size="large" />
      </div>
    );
  }
  
  if (laptops.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-7xl mb-4">💻</div>
        <h3 className="text-xl font-semibold mb-2 text-secondary-800">{emptyMessage}</h3>
        <p className="text-secondary-500 max-w-md">
          Intenta cambiar los filtros de búsqueda o vuelve más tarde.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {laptops.map(laptop => (
        <LaptopCard 
          key={laptop.id} 
          laptop={laptop}
          featured={featuredIds.includes(laptop.id)}
        />
      ))}
    </div>
  );
};

export default LaptopGrid;