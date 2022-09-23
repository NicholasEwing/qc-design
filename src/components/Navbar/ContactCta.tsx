import React from 'react'

interface Cta {
  message: string
  path: string
}

type Props = {
  cta: Cta
}

export default function ContactCta({ cta }: Props) {
  const { path, message } = cta

  return (
    <a
      href={path}
      className="block w-full bg-gradient-cyan p-0.5 font-medium text-white md:w-auto"
    >
      <div className="grid place-items-center bg-gray-900 py-2 px-4">
        <p className="font-heading text-sm md:text-lg">{message}</p>
      </div>
    </a>
  )
}
