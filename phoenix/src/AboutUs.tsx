import { EyeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const supportLinks = [
  {
    name: 'Misión',
    description: 'texto.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Visión',
    description: 'texto.',
    icon: EyeIcon,
  },
];

export default function AboutUs() {
  return (
    <section id="aboutUs" className="pt-20">
      <div className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-center">Quienes Somos</h1>
            <p className="mt-6 text-xl text-gray-300">texto.</p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-gray-100 shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-gold-goldText p-5 shadow-lg">
                    <link.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-gray-500 text-justify">{link.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
