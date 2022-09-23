import React from 'react'

type Props = {
  path: string
  name: string
}

export default function NavlinkDtop({ path, name }: Props) {
  return (
    <li className="mr-9 font-heading text-lg text-white hover:text-gray-200">
      <a href={path}>{name}</a>
    </li>
  )
}
