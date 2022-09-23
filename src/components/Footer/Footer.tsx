import React from 'react'

interface Link {
  name: string
  path: string
}

interface Props {
  links: Link[]
}

export default function Footer({ links }: Props) {
  return (
    <section className="overflow-hidden pt-24">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto mb-16 px-4 text-center text-2xl font-bold">
          Queen City Design
        </h2>
        <ul className="-m-5 flex flex-wrap justify-center space-x-5 pb-16">
          {links.map(link => (
            <li key={link.name}>
              <a
                className="font-heading text-base text-gray-900 hover:text-gray-700"
                href={link.path}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="border-b border-gray-100"></div>
        <p className="py-8 text-center text-sm text-gray-600">
          © Copyright {new Date().getFullYear()}. All Rights Reserved by Queen
          City Design.
        </p>
      </div>
    </section>
  )
}
