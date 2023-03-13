import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '#Home' },
  { name: 'Renting', href: '#Renting' },
  { name: 'Catálogo', href: '#tipoPersona' },
  { name: 'Sobre Nosotros', href: '#aboutUs' },
];

export default function PreHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="#968260">
        <nav className="mx-auto flex max-w-8xl items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <img className="h-[100px] w-[250px]" src="/FDVFD-removebg-preview.png" alt="" />
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-slate-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#ContactUs" className="text-lg font-semibold leading-6 text-gray-900">
              <span className="p-3 rounded-lg bg-gold-goldButton text-white hover:#968260">Contáctenos</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="">
                  <a href="#ContactUs" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900">
                    Contáctenos
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
