import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo size={32} color="white" />
              <span className="text-xl font-bold">CompuYa</span>
            </div>
            <p className="text-secondary-100 mb-4">
              Plataforma de compra y venta de laptops de segunda mano para la comunidad de la Universidad de Santander.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-300 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-secondary-100 hover:text-white transition-colors">
                  Explorar Laptops
                </Link>
              </li>
              <li>
                <Link to="/create-listing" className="text-secondary-100 hover:text-white transition-colors">
                  Publicar Anuncio
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-secondary-100 hover:text-white transition-colors">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-secondary-100 hover:text-white transition-colors">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-secondary-100 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-100 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-100 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-secondary-100">
                  Universidad de Santander, Campus Bucaramanga
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="mailto:contacto@compuya.co" className="text-secondary-100 hover:text-white transition-colors">
                  contacto@compuya.co
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="tel:+576076000000" className="text-secondary-100 hover:text-white transition-colors">
                  +57 607 6000000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-700 mt-8 text-center text-secondary-300 text-sm">
          <p>© {currentYear} CompuYa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;