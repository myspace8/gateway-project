import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <a href="#!" className="-m-1.5 p-1.5 text-3xl font-extrabold">
                <div className="flex lg:flex-1 items-center text-rose-700">
                    <div className='relative bg-rose-700 p-3 mr-1 text-white'>
                        <h1>Bi</h1>
                        <span className='absolute bottom-10 left-2 text-white'>.</span>
                    </div>
                    smuth
                </div>
            </a>
          <div className="hidden lg:hidden lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-1xl py-8 sm:py-38 lg:py-0">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="md:text-5xl text-3xl max-w-5xl mx-auto md:mt-16 mt-6 mb-8 font-bold tracking-normal text-gray-900 sm:text-6xl">
            Empowering Everyone to Learn Programming Basics and Decide their Path Forward
            </h1>
            
            <div className='max-w-3xl mx-auto'>
                <p className="mt-6 md:text-lg leading-8 text-gray-600">
                In today's digital age, coding or programming have become essential skills in many industries, from web development to artificial intelligence. While some may view programming as a complex and daunting task, we firmly believe that anyone can learn the basics and make an informed decision about pursuing it as a career or hobby.
                </p>
            </div>
            <div className="flex items-center justify-center flex-wrap max-w-6xl mx-auto mt-12">
                <a href="#!" className="m-4 md:w-5/12 lg:w-4/12 xl:w-4/12 p-6 text-left text-gray-800 bg-white border border-gray-200 rounded-lg shadow-lg transition-colors duration-150 hover:border-blue-500 hover:text-blue-500">
                    <h3 className='mb-4 text-3xl font-bold'>Career</h3>
                    <p>Programming can offer a rewarding and lucrative career path.</p>
                </a>

                <a href="#!" className="m-4 md:w-5/12 lg:w-4/12 xl:w-4/12 p-6 text-left text-gray-800 bg-white border border-gray-200 rounded-lg shadow-lg transition-colors duration-150 hover:border-blue-500 hover:text-blue-500">
                    <h3 className='mb-4 text-3xl font-bold'>Hobby</h3>
                    <p>Programming can be a tool for creative expression</p>
                </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/coding-hello-world"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}