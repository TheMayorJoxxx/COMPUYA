import React from 'react';

const FaqPage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Preguntas Frecuentes</h1>
      
      <div className="space-y-6">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">¿Quién puede usar CompuYa?</h2>
          <p className="text-gray-600">
            CompuYa está disponible exclusivamente para miembros de la comunidad UDES (estudiantes, profesores y personal administrativo)
            que tengan un correo institucional activo (@mail.udes.edu.co).
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">¿Cómo publico un anuncio?</h2>
          <p className="text-gray-600">
            Para publicar un anuncio, debes estar registrado y verificado. Luego, haz clic en "Publicar Anuncio"
            y completa el formulario con los detalles de tu laptop.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">¿Cómo contacto a un vendedor?</h2>
          <p className="text-gray-600">
            En cada anuncio encontrarás un botón para contactar al vendedor. Puedes enviar mensajes directos
            a través de la plataforma o usar WhatsApp si el vendedor lo ha habilitado.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">¿Cómo funciona la verificación?</h2>
          <p className="text-gray-600">
            Todos los usuarios deben registrarse con su correo institucional (@mail.udes.edu.co).
            Los anuncios pasan por un proceso de revisión antes de ser publicados.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">¿CompuYa maneja los pagos?</h2>
          <p className="text-gray-600">
            No, CompuYa es una plataforma de conexión entre compradores y vendedores.
            Los pagos y la entrega se manejan directamente entre las partes involucradas.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FaqPage;