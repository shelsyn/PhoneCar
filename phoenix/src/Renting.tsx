import { LifebuoyIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsBox2 } from 'react-icons/bs';
const cards = [
  {
    name: 'Sin cuota inicial',
    icon: AiOutlineDollar,
  },
  {
    name: 'Mantenimientos, impuestos y seguros incluidos',
    icon: LifebuoyIcon,
  },
  {
    name: 'Sin gastos y trámites de matrícula incluidos',
    icon: BsBox2,
  },
  {
    name: 'Libertad de capital de trabajo',
    icon: NewspaperIcon,
  },
  {
    name: 'No afectes tu nivel de endeudamiento y capacidad de pago',
    icon: NewspaperIcon,
  },
  {
    name: 'Kit de carretera',
    icon: NewspaperIcon,
  },
];

export default function Renting() {
  return (
    <section id="Renting" className="pt-20">
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gold-goldText sm:text-6xl">¿Qué es el renting?</h2>
            <p className="mt-6 text-lg text-slate-900">
              El renting es un servicio de alquiler de vehículos a nivel mundial, que ofrece autonomía y control al cliente durante un tiempo determinado. Incluye un paquete de servicios adaptado a
              las necesidades diarias de los clientes.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div key={card.name} className="flex gap-x-4 rounded-xl border border-dashed border-gold-goldTitle p-5">
                <card.icon className="h-10 w-10 flex-none text-gold-goldText" aria-hidden="true" />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-slate-900">{card.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
