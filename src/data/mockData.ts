import { Laptop, User } from '../types';

// Sample users for demo
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Carlos Rodriguez',
    email: 'carlos.rodriguez@udes.edu.co',
    role: 'seller',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    createdAt: '2023-08-15T10:30:00Z',
    rating: 4.8,
    verified: true,
    totalRatings: 24
  },
  {
    id: '2',
    name: 'Ana Martínez',
    email: 'ana.martinez@udes.edu.co',
    role: 'both',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdAt: '2023-09-05T15:20:00Z',
    rating: 4.5,
    verified: true,
    totalRatings: 18
  },
  {
    id: '3',
    name: 'Diego Sánchez',
    email: 'diego.sanchez@udes.edu.co',
    role: 'buyer',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    createdAt: '2023-07-22T08:15:00Z',
    rating: 4.2,
    verified: true,
    totalRatings: 12
  }
];

// Sample laptops for demo
export const mockLaptops: Laptop[] = [
  {
    id: '1',
    title: 'MacBook Pro 2020 13" - Excelente Estado',
    brand: 'Apple',
    model: 'MacBook Pro 13" 2020',
    price: 3800000,
    condition: 'like-new',
    year: 2020,
    specifications: {
      processor: 'Apple M1',
      ram: '16GB',
      storage: '512GB SSD',
      gpu: 'Apple M1 8-Core GPU',
      screenSize: '13.3"',
      batteryHealth: '92%',
      operatingSystem: 'macOS Monterey'
    },
    features: ['Touch Bar', 'Touch ID', 'Retina Display', 'Thunderbolt 3'],
    description: 'Vendo mi MacBook Pro 2020 con chip M1 en excelente estado. Perfecto para estudiantes de diseño o desarrollo. Tiene 16GB de RAM y 512GB de almacenamiento SSD. La batería está al 92% de su capacidad y viene con cargador original. Sin golpes ni rayones significativos. Lo vendo porque me compraron uno nuevo. Ideal para tareas exigentes como edición de video, diseño gráfico y programación.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '1',
    sellerName: 'Carlos Rodriguez',
    sellerRating: 4.8,
    createdAt: '2024-03-20T14:30:00Z',
    updatedAt: '2024-03-20T14:30:00Z',
    status: 'active',
    verified: true,
    featured: true
  },
  {
    id: '2',
    title: 'Dell XPS 15 - Potente laptop para ingeniería',
    brand: 'Dell',
    model: 'XPS 15 9500',
    price: 4200000,
    condition: 'good',
    year: 2021,
    specifications: {
      processor: 'Intel Core i7-10750H',
      ram: '32GB',
      storage: '1TB SSD',
      gpu: 'NVIDIA GeForce GTX 1650 Ti',
      screenSize: '15.6"',
      batteryHealth: '87%',
      operatingSystem: 'Windows 11 Pro'
    },
    features: ['4K UHD+ Display', 'Backlit Keyboard', 'Fingerprint Reader', 'Thunderbolt 3'],
    description: 'Vendo mi Dell XPS 15 en buen estado, ideal para estudiantes de ingeniería. Tiene procesador Intel Core i7, 32GB de RAM y 1TB de SSD, perfecta para correr programas pesados como AutoCAD, MATLAB, etc. La pantalla es 4K UHD+ y tiene tarjeta gráfica NVIDIA GeForce GTX 1650 Ti. Incluye cargador original.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '2',
    sellerName: 'Ana Martínez',
    sellerRating: 4.5,
    createdAt: '2024-03-15T10:45:00Z',
    updatedAt: '2024-03-15T10:45:00Z',
    status: 'active',
    verified: true,
    featured: false
  },
  {
    id: '3',
    title: 'Lenovo ThinkPad X1 Carbon - Ultrabook Profesional',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon 8th Gen',
    price: 3500000,
    condition: 'good',
    year: 2020,
    specifications: {
      processor: 'Intel Core i5-10210U',
      ram: '16GB',
      storage: '512GB SSD',
      gpu: 'Intel UHD Graphics',
      screenSize: '14"',
      batteryHealth: '90%',
      operatingSystem: 'Windows 10 Pro'
    },
    features: ['Full HD Display', 'Backlit Keyboard', 'Fingerprint Reader', 'USB-C'],
    description: 'Vendo mi Lenovo ThinkPad X1 Carbon en buen estado, usada principalmente para trabajos de oficina. Es ultraligera y con excelente batería, perfecta para estudiantes que necesiten movilidad. Tiene 16GB de RAM y 512GB de SSD. Incluye cargador original y funda protectora de regalo.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '3',
    sellerName: 'Diego Sánchez',
    sellerRating: 4.2,
    createdAt: '2024-03-10T16:20:00Z',
    updatedAt: '2024-03-10T16:20:00Z',
    status: 'active',
    verified: true,
    featured: true
  },
  {
    id: '4',
    title: 'HP Pavilion Gaming - Laptop para estudiantes de diseño',
    brand: 'HP',
    model: 'Pavilion Gaming 15',
    price: 2800000,
    condition: 'fair',
    year: 2019,
    specifications: {
      processor: 'AMD Ryzen 7 4800H',
      ram: '16GB',
      storage: '512GB SSD + 1TB HDD',
      gpu: 'NVIDIA GeForce GTX 1660 Ti',
      screenSize: '15.6"',
      batteryHealth: '83%',
      operatingSystem: 'Windows 10 Home'
    },
    features: ['144Hz Display', 'RGB Keyboard', 'Dual Storage', 'HDMI 2.0'],
    description: 'Vendo mi HP Pavilion Gaming en estado regular (tiene algunas marcas de uso). Excelente para estudiantes de diseño gráfico o ingeniería que necesiten potencia a buen precio. Tarjeta gráfica NVIDIA GTX 1660 Ti y pantalla de 144Hz. Buen rendimiento en Adobe Suite y para gaming casual.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '1',
    sellerName: 'Carlos Rodriguez',
    sellerRating: 4.8,
    createdAt: '2024-03-05T09:00:00Z',
    updatedAt: '2024-03-05T09:00:00Z',
    status: 'active',
    verified: true,
    featured: false
  },
  {
    id: '5',
    title: 'Asus ROG Zephyrus G14 - Gaming Ultraportable',
    brand: 'Asus',
    model: 'ROG Zephyrus G14',
    price: 5000000,
    condition: 'like-new',
    year: 2022,
    specifications: {
      processor: 'AMD Ryzen 9 5900HS',
      ram: '32GB',
      storage: '1TB SSD',
      gpu: 'NVIDIA GeForce RTX 3060',
      screenSize: '14"',
      batteryHealth: '96%',
      operatingSystem: 'Windows 11 Home'
    },
    features: ['WQHD 120Hz Display', 'AniMe Matrix Display', 'Dolby Atmos Audio', 'USB-C Power Delivery'],
    description: 'Vendo mi Asus ROG Zephyrus G14 en excelente estado, comprada hace 6 meses. Perfecta para gaming y trabajos de renderizado. Tiene pantalla WQHD de 120Hz, procesador Ryzen 9 y gráfica RTX 3060. Es ultraportable y con excelente batería para un equipo gaming. Incluye cargador original, caja y todos los accesorios.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '2',
    sellerName: 'Ana Martínez',
    sellerRating: 4.5,
    createdAt: '2024-03-01T12:15:00Z',
    updatedAt: '2024-03-01T12:15:00Z',
    status: 'active',
    verified: true,
    featured: true
  },
  {
    id: '6',
    title: 'Microsoft Surface Laptop 4 - Elegante y Potente',
    brand: 'Microsoft',
    model: 'Surface Laptop 4',
    price: 3200000,
    condition: 'like-new',
    year: 2021,
    specifications: {
      processor: 'AMD Ryzen 5 4680U',
      ram: '16GB',
      storage: '512GB SSD',
      gpu: 'AMD Radeon Graphics',
      screenSize: '13.5"',
      batteryHealth: '94%',
      operatingSystem: 'Windows 11 Home'
    },
    features: ['PixelSense Display', 'Alcantara Keyboard', 'Surface Connect', 'USB-C'],
    description: 'Vendo mi Microsoft Surface Laptop 4 en excelente estado. Es un equipo elegante, ultradelgado y con gran autonomía de batería. Pantalla táctil PixelSense de alta resolución y teclado Alcantara muy cómodo. Perfecto para estudiantes que necesiten movilidad y estilo. Incluye cargador original.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '3',
    sellerName: 'Diego Sánchez',
    sellerRating: 4.2,
    createdAt: '2024-02-25T14:45:00Z',
    updatedAt: '2024-02-25T14:45:00Z',
    status: 'active',
    verified: false,
    featured: false
  },
  {
    id: '7',
    title: 'Acer Nitro 5 - Para gaming a buen precio',
    brand: 'Acer',
    model: 'Nitro 5 AN515-55',
    price: 2500000,
    condition: 'good',
    year: 2020,
    specifications: {
      processor: 'Intel Core i5-10300H',
      ram: '16GB',
      storage: '512GB SSD',
      gpu: 'NVIDIA GeForce GTX 1650',
      screenSize: '15.6"',
      batteryHealth: '85%',
      operatingSystem: 'Windows 10 Home'
    },
    features: ['144Hz Display', 'RGB Keyboard', 'CoolBoost Technology', 'HDMI 2.0'],
    description: 'Vendo mi Acer Nitro 5 en buen estado, usado principalmente para gaming casual y tareas universitarias. Buen rendimiento en juegos populares como Valorant, Fortnite, LOL. La batería dura aproximadamente 4-5 horas en uso normal. Incluye cargador original.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '1',
    sellerName: 'Carlos Rodriguez',
    sellerRating: 4.8,
    createdAt: '2024-02-20T11:30:00Z',
    updatedAt: '2024-02-20T11:30:00Z',
    status: 'active',
    verified: true,
    featured: false
  },
  {
    id: '8',
    title: 'Huawei MateBook X Pro - Ultrabook Premium',
    brand: 'Huawei',
    model: 'MateBook X Pro 2021',
    price: 3600000,
    condition: 'like-new',
    year: 2021,
    specifications: {
      processor: 'Intel Core i7-1165G7',
      ram: '16GB',
      storage: '1TB SSD',
      gpu: 'Intel Iris Xe Graphics',
      screenSize: '13.9"',
      batteryHealth: '92%',
      operatingSystem: 'Windows 10 Home'
    },
    features: ['3K FullView Display', 'Pop-up Camera', 'Thunderbolt 4', 'Fingerprint Power Button'],
    description: 'Vendo mi Huawei MateBook X Pro en excelente estado, comprada hace un año. Es un ultrabook premium con pantalla 3K táctil, excelente para estudiantes o profesionales que valoran portabilidad y rendimiento. Batería de larga duración y carga rápida. Incluye cargador original y funda protectora de regalo.',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    sellerId: '2',
    sellerName: 'Ana Martínez',
    sellerRating: 4.5,
    createdAt: '2024-02-15T16:20:00Z',
    updatedAt: '2024-02-15T16:20:00Z',
    status: 'active',
    verified: true,
    featured: false
  }
];