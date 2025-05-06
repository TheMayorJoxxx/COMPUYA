import { Laptop } from 'lucide-react';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo = ({ size = 24, color }: LogoProps) => {
  return (
    <div className="relative">
      <Laptop 
        size={size} 
        className={color ? `text-${color}` : 'text-primary-600'} 
        strokeWidth={2} 
      />
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold ${
          color ? `text-${color}` : 'text-white'
        }`} 
        style={{ fontSize: size * 0.4 }}
      >
        U
      </div>
    </div>
  );
};

export default Logo;