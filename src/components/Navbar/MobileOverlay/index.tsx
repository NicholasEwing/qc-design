import React, { MouseEventHandler } from 'react'
import { SITE_TITLE } from '../../../config'
import ContactCta from '../ContactCta'
import NavlinkMobile from '../Navlinks/NavlinkMobile'

interface Links {
  path: string
  name: string
}

interface Cta {
  message: string
  path: string
}

type Props = {
  links: Links[]
  handleToggleOverlay: MouseEventHandler
  cta: Cta
}

export default function MobileOverlay({
  links,
  handleToggleOverlay,
  cta
}: Props) {
  return (
    <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 block w-4/6 sm:max-w-xs">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav className="relative z-10 h-full bg-gray-900 px-9 py-8">
        <div className="flex h-full flex-wrap justify-between">
          <div className="w-full">
            <div className="-m-2 flex items-center justify-between">
              <div className="w-auto p-2">
                <a className="inline-block" href="/">
                  <h2 className="font-heading text-2xl text-white">
                    {SITE_TITLE}
                  </h2>
                </a>
              </div>
              <div className="w-auto select-none p-2">
                <button className="navbar-burger" onClick={handleToggleOverlay}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-start py-8">
            <ul>
              {links.map(link => (
                <NavlinkMobile
                  key={link.name}
                  name={link.name}
                  path={link.path}
                />
              ))}
            </ul>
          </div>
          <div className="flex w-full flex-col justify-end">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ContactCta cta={cta} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
