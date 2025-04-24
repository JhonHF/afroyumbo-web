import Image from "next/image";
import React from "react";

export default function HomeContent() {
  return (
    <main className="relative flex-1">
      {/* Cambia h-screen por flex-1 */}
      {/* Contenedor de la imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/desfile_de_la_afrocolombianidad.jpg"
          alt="foto ilustrativa en el desfile de la afrocolombianidad"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>
      {/* Contenido principal (centrado) */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">texto</h1>
      </div>
    </main>
  );
}
