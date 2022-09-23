import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { SITE_TITLE } from '../../config'
import NavlinkDtop from './Navlinks/NavlinkDtop'
import MobileOverlay from './MobileOverlay'
import ContactCta from './ContactCta'
import HamburgerMenuBtn from './HamburgerMenuBtn'
// import ThemeToggle from './ThemeToggleButton'

interface Link {
  path: string
  name: string
}

type Props = {
  links: Link[]
}

const cta = {
  message: 'Contact Us',
  path: '/contact'
}

export default function Navbar({ links }: Props) {
  const [mobileOverlayOpen, setMobileOverlayOpen] = useState(false)

  const handleOverlayToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMobileOverlayOpen(!mobileOverlayOpen)
  }

  return (
    <nav className="overflow-hidden">
      <div className="flex items-center justify-between bg-gray-900 px-8 py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="mr-14 w-auto">
              <a href="/">
                <h2 className="font-heading text-4xl text-white">
                  {SITE_TITLE}
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-auto lg:block">
              <ul className="mr-10 flex items-center">
                {links.map(link => (
                  <NavlinkDtop
                    key={link.name}
                    name={link.name}
                    path={link.path}
                  />
                ))}
              </ul>
            </div>
            <div className="hidden w-auto lg:block">
              <ContactCta cta={cta} />
            </div>
            <div className="w-auto lg:hidden">
              <HamburgerMenuBtn handleOverlayToggle={handleOverlayToggle} />
            </div>
          </div>
        </div>
      </div>
      <Transition
        className="fixed h-screen select-none"
        show={mobileOverlayOpen}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MobileOverlay
          links={links}
          handleToggleOverlay={handleOverlayToggle}
          cta={cta}
        />
      </Transition>
    </nav>
  )
}
