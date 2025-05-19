"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiXMark, HiBars3 } from "react-icons/hi2";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentPath = usePathname();

  const navigation = [
    { name: "Inicio", href: "/" },
    /*     { name: "Blog", href: "/blog" },
    {
      name: "Acerca de nosotros",
      href: "/about",
    }, */
  ];

  return (
    <Disclosure as="nav" className="bg-green-700">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span className="absolute -inset-0.5" />

              <span className="sr-only">Abrir menu</span>

              <HiBars3 className="block size-6 group-data-open:hidden" />

              <HiXMark className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo y enlaces */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src="/logo_afroyumbo.jpg"
                alt="Logo de afroyumbo"
                width={640}
                height={480}
                className="h-16 w-auto"
              />
            </div>

            {/* Enlaces desktop */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 h-full">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={
                      currentPath === item.href ? "page" : undefined
                    }
                    className={classNames(
                      currentPath === item.href
                        ? "text-white"
                        : "text-gray-200 hover:text-white",
                      "relative group px-3 py-2 text-sm my-auto"
                    )}
                  >
                    <p className="text-lg">{item.name}</p>

                    {/* Subrayado animado (solo en hover) */}
                    {currentPath === item.href && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    )}

                    {/* Subrayado permanente para current */}
                    {currentPath === item.href && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-yellow-400"></span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menú móvil (FALTABA ESTE COMPONENTE) */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  currentPath === item.href
                    ? "bg-green-800 text-white"
                    : "text-gray-200 hover:bg-green-800 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={currentPath === item.href ? "page" : undefined}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}
