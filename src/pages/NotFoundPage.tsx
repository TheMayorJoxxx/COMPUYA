import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-3">Página no encontrada</h1>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link to="/">
            <Button variant="primary" leftIcon={<Home size={18} />}>
              Ir al inicio
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="secondary" leftIcon={<Search size={18} />}>
              Buscar laptops
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;