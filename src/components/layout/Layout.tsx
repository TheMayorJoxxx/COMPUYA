import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppChat from '../chat/WhatsAppChat';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${!isAuthPage ? 'pt-16 pb-8' : ''}`}>
        {children}
      </main>
      <Footer />
      <WhatsAppChat phoneNumber="573001234567" />
    </div>
  );
};

export default Layout;