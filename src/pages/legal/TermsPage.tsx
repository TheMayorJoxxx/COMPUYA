import React from 'react';

const TermsPage = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los términos</h2>
          <p className="mb-4">
            Al acceder y utilizar CompuYa, aceptas cumplir con estos términos y condiciones de uso.
            Estos términos se aplican a todos los usuarios de la plataforma, ya sean compradores o vendedores.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Elegibilidad</h2>
          <p className="mb-4">
            El uso de CompuYa está restringido a miembros activos de la comunidad de la Universidad de Santander (UDES),
            incluyendo estudiantes, profesores y personal administrativo, que posean una cuenta de correo institucional
            (@mail.udes.edu.co).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Cuenta de usuario</h2>
          <p className="mb-4">
            Para utilizar CompuYa, debes crear una cuenta utilizando tu correo institucional de la UDES.
            Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Publicación de anuncios</h2>
          <p className="mb-4">
            Los vendedores son responsables de proporcionar información precisa y veraz sobre los productos que publican.
            CompuYa se reserva el derecho de retirar cualquier anuncio que viole estos términos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Transacciones</h2>
          <p className="mb-4">
            CompuYa actúa como plataforma de conexión entre compradores y vendedores.
            No somos responsables de las transacciones realizadas entre usuarios.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;