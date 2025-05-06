import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Información que recolectamos</h2>
          <p className="mb-4">
            Recopilamos información necesaria para el funcionamiento de la plataforma, incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Correo electrónico institucional</li>
            <li>Nombre completo</li>
            <li>Información de perfil público</li>
            <li>Datos de las publicaciones realizadas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la información</h2>
          <p className="mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Verificar la pertenencia a la comunidad UDES</li>
            <li>Facilitar la comunicación entre usuarios</li>
            <li>Mejorar nuestros servicios</li>
            <li>Prevenir actividades fraudulentas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Protección de datos</h2>
          <p className="mb-4">
            Implementamos medidas de seguridad para proteger tu información personal.
            No compartimos datos personales con terceros sin tu consentimiento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p className="mb-4">
            Utilizamos cookies para mejorar la experiencia de usuario y mantener las sesiones activas.
            Puedes configurar tu navegador para rechazar cookies, pero esto podría afectar algunas funcionalidades.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;