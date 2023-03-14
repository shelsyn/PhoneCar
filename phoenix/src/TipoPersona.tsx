import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Persona Natural',
    id: 'naturalPerson',
    href: '/catalogoNatural',
    img: 'https://images.unsplash.com/photo-1592841242879-cae7035f7551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Estrena vehículo de acuerdo al que mejor se ajuste a tus necesidades cada 48 meses, pagas un valor mensual .',
    features: [
      'Certificado bancario. Aplica para todas las cuentas fuera de Bancolombia.',
      'Declaración de renta en caso de no declarar renta carta de no declarante.',
      'Autorización consulta centrales de riesgo.',
      'Extractos bancarios últimos 3 meses.',
      'Foto de la cédula a color.',
      'Copia del Rut.',
    ],
  },
  {
    name: 'Empresa',
    id: 'company',
    href: '/catalogoEmpresa',
    img: 'https://images.unsplash.com/photo-1587813369290-091c9d432daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'La renta de vehículos es una tendencia mundial para empresas que quieren evitar los costos de tener un vehículo propio, incluyendo impuestos, seguros y mantenimiento.',
    features: [
      'Declaración de renta últimos 3 años. (2019-2020)',
      'Cámara de comercio vigente no mayor a 30 días.',
      'Fotocopia cédula Representante legal.',
      'Declaración de renta 2020.',
      'Declaración de renta del representante legal',
      'Entre otros más...',
    ],
  },
];
export default function TipoPersona() {
  return (
    <section id="tipoPersona">
      <div className="isolate overflow-hidden bg-gold-goldBg">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mt-2 text-7xl font-bold tracking-tight text-white sm:text-5xl">Renta tu vehículo</p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/90">Mejora tu experiencia de manejo y disfruta del confort de un auto de renting de alta calidad. </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse cx={604} cy={512} fill="url(#968260-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
              <defs>
                <radialGradient id="968260-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#aa9067" />
                  <stop offset={1} stopColor="#dcb47a" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root bg-white pb-20 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 lg:grid-cols-2">
                {tiers.map((tier) => (
                  <div key={tier.id} className="h-[450px] w-[600px] bg-transparent cursor-pointer rounded-3xl group perspective">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 h-full w-full transition-all duration-1000 rounded-3xl">
                      <div className="absolute backface-hidden w-full h-full rounded-3xl">
                        <h3 className="text-2xl font-semibold leading-10 text-white mb-2 text-center">{tier.name}</h3>
                        <img alt="" className="h-full w-full rounded-3xl" src={tier.img} />
                      </div>
                      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-white rounded-3xl">
                        <div className="text-center flex flex-col justify-center h-full m-7">
                          <h3 className="text-3xl font-semibold leading-7 text-gold-goldButton">{tier.name}</h3>
                          <p className="mt-6 text-base leading-5 text-gray-600">{tier.description}</p>
                          <ul className="mt-15 space-y-4 text-sm leading-6 text-gray-600">
                            {tier.features.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-yellow-800" aria-hidden="true" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className="mt-8 block rounded-md bg-gold-goldButton px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gold-goldHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-goldSubtitle"
                          >
                            Nuestro Catálogo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
