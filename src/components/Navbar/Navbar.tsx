import React, { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'

interface Link {
  name: string
  path: string
}

interface Props {
  links: Link[]
  transparent?: Boolean
}

export default function Navbar({ links, transparent = true }: Props) {
  const [openNav, setOpenNav] = useState(false)

  return (
    <section>
      <div
        className={`${
          transparent ? 'bg-transparent' : 'bg-black'
        } relative flex items-center justify-between px-8 py-5`}
      >
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="mr-14 w-auto">
              <a href="/">
                <h2 className="absolute top-5 text-2xl font-bold text-white">
                  Queen City Design
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden w-auto lg:block">
          <ul className="mr-10 flex items-center space-x-9">
            {links.map(link => (
              <li
                key={link.name}
                className="font-heading text-lg text-white hover:text-gray-200"
              >
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto lg:hidden">
              <button onClick={() => setOpenNav(!openNav)}>
                <svg
                  className="navbar-burger text-gray-800"
                  width="51"
                  height="51"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="56"
                    height="56"
                    rx="28"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={openNav}
        enter="duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 block w-4/6 sm:max-w-xs">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 h-full bg-white px-9 py-8">
            <div className="flex h-full flex-wrap justify-between">
              <div className="w-full">
                <div className="-m-2 flex items-center justify-between">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="/">
                      <h2 className="top-5 text-2xl font-bold text-black">
                        Queen City Design
                      </h2>
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <button onClick={() => setOpenNav(!openNav)}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col py-8">
                <ul className="space-y-12">
                  {links.map(link => (
                    <li key={`${link.path}-mobile`}>
                      <a
                        className="font-heading text-lg font-medium text-gray-900 hover:text-gray-700"
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </Transition>
    </section>
  )
}
