import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Spinner from './components/ui/Spinner';
import { AuthProvider } from './context/AuthContext';

// Lazy-loaded pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const LaptopDetailPage = lazy(() => import('./pages/laptops/LaptopDetailPage'));
const SearchPage = lazy(() => import('./pages/search/SearchPage'));
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const CreateListingPage = lazy(() => import('./pages/laptops/CreateListingPage'));
const ProfilePage = lazy(() => import('./pages/users/ProfilePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Legal pages
const TermsPage = lazy(() => import('./pages/legal/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage'));
const FaqPage = lazy(() => import('./pages/legal/FaqPage'));
const ContactPage = lazy(() => import('./pages/legal/ContactPage'));

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Spinner size="large" /></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/laptops/:id" element={<LaptopDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/create-listing" element={<CreateListingPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            
            {/* Legal routes */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </AuthProvider>
  );
}

export default App;