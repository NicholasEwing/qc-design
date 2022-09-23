import React from 'react'

type Props = {
  path: string
  name: string
}

export default function NavlinkMobile({ path, name }: Props) {
  return (
    <li className="mb-12">
      <a
        className="font-heading text-lg font-medium text-white hover:text-gray-200"
        href={path}
      >
        {name}
      </a>
    </li>
  )
}
