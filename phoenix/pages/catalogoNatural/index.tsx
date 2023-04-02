import HeaderNatural from 'CatalogoNatural/HeaderNatural';
import RentingNatural from 'CatalogoNatural/RentingNatural';
import { ContactUs } from 'ContactUs';
import Footer from 'Footer';
import Products from 'Products';

const products = [
  {
    id: 1,
    name: 'Chevrolet TRACKER TURBO LTZ AT -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+TRACKER+TURBO+LTZ+AT+-Camioneta,+gracias.',
    imageSrc: './CHEVROLET-TRACKER-TURBO.jpg',
    imageAlt: 'Chevrolet TRACKER TURBO LTZ AT -Camioneta - SUV.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Chevrolet ONIX HB PREMIER TURBO AT -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+ONIX+HB+gracias.',
    imageSrc: './onix-HB.jpg',
    imageAlt: 'Chevrolet ONIX HB PREMIER TURBO AT -Automovil',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Chevrolet TAHOE 5.3L 4X4 LT -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Chevrolet+TAHOE++4X4+gracias.',
    imageSrc: './chevrolet_tahoe.jpg',
    imageAlt: 'Chevrolet TAHOE 5.3L 4X4 LT -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Ford ESCAPE SE 4X2 ECOBOOST -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ford+ESCAPE+SE+4X2+gracias.',
    imageSrc: './FORD-ESCAPE-SE-SPORT-4X2.jpg',
    imageAlt: 'Ford ESCAPE SE 4X2 ECOBOOST -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Hyundai HB20 Getz Advance AT -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Hyundai+HB20,gracias.',
    imageSrc: './HYUNDAI-HB20.jpeg',
    imageAlt: 'Hyundai HB20 Getz Advance AT -Automovil',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Jeep COMPASS LONGITUDE PLUS -Camioneta – SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Jeep+COMPASS+LONGITUDE,+gracias.',
    imageSrc: './Jeep COMPASS.jpeg',
    imageAlt: 'Jeep COMPASS LONGITUDE PLUS -Camioneta – SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Kia PICANTO VIBRANT MT -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Kia+PICANTO+,gracias.',
    imageSrc: './PICANTO.jpg',
    imageAlt: 'Kia PICANTO VIBRANT MT -Automovil',
    price: '$1´400.000',
  },

  {
    id: 1,
    name: 'Kia RIO SEDÁN EMOTION MT -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Kia+RIO+,gracias.',
    imageSrc: './kia-rioo.jpeg',
    imageAlt: 'Kia RIO SEDÁN EMOTION MT -Automovil',
    price: '$1´400.000',
  },

  {
    id: 1,
    name: 'Mazda CX5 TOURING 2.0 AT 4X2 CUERO -Camioneta',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX5+,gracias.',
    imageSrc: './mazda-cx5.jpg',
    imageAlt: 'Mazda CX5 TOURING 2.0 AT 4X2 CUERO -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mazda MX30 GRAND TOURING -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+MX30+,gracias.',
    imageSrc: './mazda-MX30.jpg',
    imageAlt: 'Mazda MX30 GRAND TOURING -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mercedes Benz GLB 200 AMG LINE -Campero',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+mercedez+GLB,+gracias.',
    imageSrc: './GLB 200.jpg',
    imageAlt: 'Mercedes Benz GLB 200 AMG LINE -Campero',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mitsubishi Eclipse Cross AT 4x4 -Camioneta',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+nissan+panel+NV-350,+gracias.',
    imageSrc: './mitsubishi-eclipse.jpg',
    imageAlt: 'Mitsubishi Eclipse Cross AT 4x4 -Camioneta - SUV',
    price: '$1´400.000',
  },

  {
    id: 1,
    name: 'Nissan KICKS ADVANCE 1.6L 2WD AUT CVT -Camioneta',
    color: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Nissan+KICKS,+gracias.',
    imageSrc: './nissan_kicks.jpg',
    imageAlt: 'Nissan KICKS ADVANCE 1.6L 2WD AUT CVT -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Nissan NEW SENTRA 2.0L SR AUT CVT -Automovil',
    color: '2024',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Nissan+NEW+SENTRA,+gracias.',
    imageSrc: './Nissan NEW.jpg',
    imageAlt: 'Nissan NEW SENTRA 2.0L SR AUT CVT -Automovil',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Peugeot 2008 GT-LINE 1.2 PURETECH -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Peugeot+2008,+gracias.',
    imageSrc: './Peugeot 2008.jpg',
    imageAlt: 'Peugeot 2008 GT-LINE 1.2 PURETECH -Camioneta - SUV',
    price: '$1´400.000',
  },

  {
    id: 1,
    name: 'Renault LOGAN LIFE + PH2 -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+LOGAN,+gracias.',
    imageSrc: './Renault LOGAN LIFE.jpg',
    imageAlt: 'Renault LOGAN LIFE + PH2 -Automovil',
    price: '$1´400.000',
  },

  {
    id: 1,
    name: 'Renault TWIZY TECHNIC -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+TWIZY,+gracias.',
    imageSrc: './Renault TWIZY.jpeg',
    imageAlt: 'Renault TWIZY TECHNIC -Automovil',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Subaru XV HYBRID -Campero',
    color: '2022',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Subaru+XV,+gracias.',
    imageSrc: './Subaru XV.jpeg',
    imageAlt: 'Subaru XV HYBRID -Campero',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Suzuki NEW ALTO 800 STD AC ABS -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+NEW+ALTO+800,+gracias.',
    imageSrc: './alto.jpg',
    imageAlt: 'Suzuki NEW ALTO 800 STD AC ABS -Automovil',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Suzuki XL7 GL MT -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Suzuki+XL7,+gracias.',
    imageSrc: './Suzuki XL7.jpg',
    imageAlt: 'Suzuki XL7 GL MT -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Renault ZOE (Eléctrico) -Automovil',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Renault+ZOE,+gracias.',
    imageSrc: './Renault ZOE.jpeg',
    imageAlt: 'Renault ZOE (Eléctrico) -Automovil',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Ford BRONCO SPORT WILDTRACK 4X4 -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Ford+BRONCO+SPORT,+gracias.',
    imageSrc: './Ford-Bronco.jpg',
    imageAlt: 'Ford BRONCO SPORT WILDTRACK 4X4 -Camioneta - SUV.',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mazda CX50 GRAND TOURING 2.5 AT 4X2 -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX50+GRAND,+gracias.',
    imageSrc: './mazda_cx_50.jpg',
    imageAlt: 'Mazda CX50 GRAND TOURING 2.5 AT 4X2 -Camioneta - SUV',
    price: '$1´400.000',
  },
  {
    id: 1,
    name: 'Mazda CX5 TOURING 2.0 AT 4X2 CUERO -Camioneta - SUV',
    color: '2023',
    href: 'https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+sobre+la+Mazda+CX5+TOURING,+gracias.',
    imageSrc: './mazda-cx5.jpg',
    imageAlt: 'Mazda CX5 TOURING 2.0 AT 4X2 CUERO -Camioneta - SUV',
    price: '$1´400.000',
  },
];
export default function CatalogoPersonaNatural() {
  return (
    <>
      <HeaderNatural />
      <RentingNatural />
      <section id="catalogoEmpresa">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl text-gold-goldTitle font-bold ">Nuestro Catálogo</h2>
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
      <ContactUs />
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
