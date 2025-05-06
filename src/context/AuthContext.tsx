import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller' | 'both';
}

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // En una aplicación real, verificaríamos si hay un token en localStorage
  // y lo validaríamos con el backend
  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error('Error parsing stored user:', error);
          localStorage.removeItem('user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const validateEmail = (email: string): boolean => {
    return email.endsWith('@mail.udes.edu.co');
  };

  // Para la demostración, simularemos una autenticación
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // En una aplicación real, esto sería una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Verificar que el correo sea institucional
      if (!validateEmail(email)) {
        throw new Error('Debe utilizar un correo institucional (@mail.udes.edu.co)');
      }
      
      // Simular un usuario
      const mockUser: User = {
        id: '1',
        name: 'Usuario Demo',
        email: email,
        role: 'both',
        createdAt: new Date().toISOString(),
        rating: 4.5,
        verified: true,
        totalRatings: 12
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Error en login:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // En una aplicación real, esto sería una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Verificar que el correo sea institucional
      if (!validateEmail(userData.email)) {
        throw new Error('Debe utilizar un correo institucional (@mail.udes.edu.co)');
      }
      
      // Simular registro exitoso
      const newUser: User = {
        id: '1',
        name: userData.name,
        email: userData.email,
        role: userData.role,
        createdAt: new Date().toISOString(),
        rating: 0,
        verified: false,
        totalRatings: 0
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Error en registro:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    register,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};