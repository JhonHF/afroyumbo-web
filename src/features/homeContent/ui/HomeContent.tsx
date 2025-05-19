import Image from "next/image";
import React from "react";

export default function HomeContent() {
  return (
    <div className="relative grid h-full place-items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/desfile_de_la_afrocolombianidad.jpg"
          alt="foto ilustrativa en el desfile de la afrocolombianidad"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black/70 -z-10" />
      {/* Contenido centrado */}
      <div className="text-center px-4">
        <h1 className="text-white text-4xl font-bold">
          Bienvenidos a afroyumbo
        </h1>

        <h2 className="text-white text-2xl font-bold mt-16">
          Somos una organizacion que promueve y vela por los derechos de los
          afrocolombianos
        </h2>
      </div>
    </div>
  );
}
