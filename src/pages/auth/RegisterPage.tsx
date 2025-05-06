import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'both',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!formData.email.endsWith('@mail.udes.edu.co')) {
      newErrors.email = 'Debe utilizar un correo institucional (@mail.udes.edu.co)';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    if (!formData.role) {
      newErrors.role = 'Por favor seleccione un rol';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role as 'buyer' | 'seller' | 'both'
      });
      
      if (success) {
        navigate('/dashboard');
      }
    } catch (error) {
      setErrors({
        form: 'Ocurrió un error durante el registro'
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crear Cuenta</h1>
          <p className="text-gray-600">
            Únete a la comunidad de compra y venta de laptops en UDES
          </p>
        </div>
        
        {errors.form && (
          <div className="bg-error-50 border border-error-200 text-error-800 px-4 py-3 rounded-md flex items-start">
            <AlertCircle className="flex-shrink-0 h-5 w-5 mr-2 mt-0.5" />
            <p>{errors.form}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="form-label">
                Nombre Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">
                Correo Electrónico Institucional
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="usuario@mail.udes.edu.co"
                className={`input-field ${errors.email ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
              />
              {errors.email ? (
                <p className="form-error">{errors.email}</p>
              ) : (
                <p className="mt-1 text-xs text-gray-500">
                  Debe ser un correo institucional (@mail.udes.edu.co)
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                className={`input-field ${errors.password ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
              />
              {errors.password && <p className="form-error">{errors.password}</p>}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`input-field ${errors.confirmPassword ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
              />
              {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
            </div>
            
            <div>
              <label htmlFor="role" className="form-label">
                ¿Cómo planeas usar la plataforma?
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`input-field ${errors.role ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
              >
                <option value="both">Comprar y vender laptops</option>
                <option value="buyer">Solo comprar laptops</option>
                <option value="seller">Solo vender laptops</option>
              </select>
              {errors.role && <p className="form-error">{errors.role}</p>}
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              Acepto los{' '}
              <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                términos y condiciones
              </Link>
            </label>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isLoading}
            leftIcon={<UserPlus size={18} />}
          >
            Crear Cuenta
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link 
                to="/login" 
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;