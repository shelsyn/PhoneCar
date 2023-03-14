import { Switch } from '@headlessui/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import classNames from '../utils/ClassNames';

export function ContactUs() {
  const [agreed, setAgreed] = useState(false);
  return (
    <section id="ContactUs" className="pb-20">
      <div className="relative bg-white">
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight phoenix_car@outlook.com sm:text-3xl">Contáctanos</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">Estaremos respondiendo lo mas pronto posible.</p>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-6">
                  <dt className="sr-only">Número de teléfono</dt>
                  <dd className="flex">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                    <a href="tel:+573143532474">+57 (314) 3532474</a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                    <a href="mailto:phoenix_car@outlook.com?Subject=Aquí%20el%20asunto%20del%20mail">phoenix_car@outlook.com</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nombres
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm phoenix_car@outlook.com phoenix_car@outlook.com"
                    placeholder="Nombres *"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm phoenix_car@outlook.com phoenix_car@outlook.com"
                    placeholder="Apellidos *"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Email *"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Número de teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Número de teléfono *"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Mensaje *"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? 'bg-gold-goldText' : 'bg-gray-200',
                          'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        )}
                      >
                        <span className="sr-only">Agree to policies</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? 'translate-x-3.5' : 'translate-x-0',
                            'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">
                      Aceptas la política de protección de datos personales{' '}
                      <a href="#Home" className="font-semibold text-gold-goldText">
                        políticas&nbsp;de&nbsp;privacidad
                      </a>
                      .
                    </Switch.Label>
                  </Switch.Group>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center rounded-md border border-transparent bg-gold-goldText py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-gold-goldTitle focus:outline-none focus:ring-2 focus:ring-gold-goldText focus:ring-offset-2"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
