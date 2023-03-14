import Products from 'Products';
import RentingEmpresas from 'CatalogoEmpresas/RentingEmpresas';
import HeaderEmpresas from 'CatalogoEmpresas/HeaderEmpresas';
import Footer from 'Footer';

const products = [
  {
    id: 1,
    name: 'Toyota HILUX D.C. 4X4 DIESEL 2.4 AUTOMATICA -Pickup',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Toyota+HILUX,+gracias.',
    imageSrc: '../Toyota-Hylux.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Ford RANGER XL 3.2L DIESEL 4X4 -Pickup',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ford+RANGER+XL+3.2L+DIESEL+4X4,+gracias.',
    imageSrc: './fordRY.jpeg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Renault NUEVA MASTER MAXI CARGA -Vans',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+NUEVA+MASTER+MAXI+CARGA+Vans,+gracias.',
    imageSrc: './Master.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mitsubishi L200 GLS AT SE -Pickup',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mitsubishi+L200,+gracias.',
    imageSrc: './L200.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'ZNA RICH 6 EV DC -Pickup',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+ZNA+RICH+6+EV+DC+Pickup,+gracias.',
    imageSrc: './Rich-6.png',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'RENAULT ALASKAN CARGO -Pickup',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+RENAULT+ALASKAN+CARGO,+gracias.',
    imageSrc: './ALASKAN.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Chevrolet N400 -Vans',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+N400+Vans,+gracias.',
    imageSrc: './Chevrolet-N400.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'DFSK CARGO 1.2 K05S LUXURY -Vans',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+DFSK+CARGO+K05S+LUXURY+Vans,+gracias.',
    imageSrc: './DFSKK.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Nissan PANEL NV-350 NEW URVAN 2.5 TURBO DIESEL T.ALTO A -Vans A -Vans',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+nissan+panel+NV-350,+gracias.',
    imageSrc: './nv350.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Chevrolet NHR Reward Euro IV -Liviano',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+NHR+Reward+Euro+IV+Liviano+Liviano+gracias.',
    imageSrc: './NHR.png',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Foton FKR Euro IV -Camión Liviano',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Foton+FKR+Euro+IV+Camión+Liviano+gracias.',
    imageSrc: './foton-fkr.png',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mitsubishi Canter Fuso 5,7M -Camión Liviano',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mitsubishi+Canter+Fuso+5,7M+Camión+Liviano+gracias.',
    imageSrc: './carter-fuso.png',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Foton FHR 3.0 CUMMINS 2023 - BJ1045  C/A - Camión',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+foton+FHR+3.0+cummins,+gracias.',
    imageSrc: './cummins.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Ram V700 -Vans',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ram+V700+Vans,+gracias.',
    imageSrc: './RAM-V700.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$1´400.000',
  },
];
export default function CatalogoEmpresa() {
  return (
    <>
      <HeaderEmpresas />
      <RentingEmpresas />
      <section id="catalogoEmpresa">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl font-bold phoenix_car@outlook.com">Nuestro Catálogo</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                      {/* <p className="relative text-lg font-semibold text-white">{product.price}</p> */}
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      target="_blank"
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gold-goldButton py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                      rel="noreferrer"
                    >
                      Más información<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Products />
      <Footer />
      <div className="z-[100]">
        <a
          href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+estoy+interesado+en+rentar+un+vehículo,+pordrían+brindarme+más+información,+gracias."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-4 right-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#25D366" className="animate-bounce" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </div>
    </>
  );
}
