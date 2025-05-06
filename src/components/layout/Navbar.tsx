import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Laptop, 
  Search, 
  User, 
  LogIn, 
  Menu, 
  X, 
  MessageSquare, 
  PlusCircle, 
  LogOut, 
  Bell
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo size={32} />
            <span className="text-xl font-bold text-primary-700">CompuYa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary-800 hover:text-primary-600 font-medium">
              Inicio
            </Link>
            <Link to="/search" className="text-secondary-800 hover:text-primary-600 font-medium">
              Explorar
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/create-listing" className="text-secondary-800 hover:text-primary-600 font-medium">
                  Publicar
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-secondary-800 hover:text-primary-600 font-medium">
                    <span>Mi Cuenta</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Dashboard
                      </Link>
                      <Link to="/dashboard/messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Mensajes
                      </Link>
                      <button 
                        onClick={handleLogout} 
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login" className="flex items-center text-secondary-800 hover:text-primary-600 font-medium">
                <LogIn size={18} className="mr-1" />
                <span>Ingresar</span>
              </Link>
            )}
            <Link to="/search" className="btn-primary flex items-center">
              <Search size={18} className="mr-1" />
              <span>Buscar</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16 pb-6 px-4">
          <div className="flex-grow">
            <Link 
              to="/" 
              className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/search" 
              className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <Search size={20} className="mr-2" />
              Explorar
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/create-listing" 
                  className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <PlusCircle size={20} className="mr-2" />
                  Publicar Laptop
                </Link>
                <Link 
                  to="/dashboard" 
                  className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} className="mr-2" />
                  Mi Perfil
                </Link>
                <Link 
                  to="/dashboard/messages" 
                  className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageSquare size={20} className="mr-2" />
                  Mensajes
                </Link>
                <Link 
                  to="/dashboard/notifications" 
                  className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Bell size={20} className="mr-2" />
                  Notificaciones
                </Link>
              </>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center py-3 px-4 text-lg font-medium border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <LogIn size={20} className="mr-2" />
                Ingresar
              </Link>
            )}
          </div>
          
          {isAuthenticated && (
            <button 
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="flex items-center py-3 px-4 text-lg font-medium text-error-600"
            >
              <LogOut size={20} className="mr-2" />
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;