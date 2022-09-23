import React, { MouseEventHandler } from 'react'

type Props = {
  handleOverlayToggle: MouseEventHandler
}

export default function HamburgerMenuBtn({ handleOverlayToggle }: Props) {
  return (
    <>
      <button
        className="rounded-full focus:ring focus:ring-slate-500"
        onClick={handleOverlayToggle}
      >
        <svg
          className="navbar-burger text-gray-800"
          width="51"
          height="51"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="56" height="56" rx="28" fill="currentColor"></rect>
          <path
            d="M37 32H19M37 24H19"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </>
  )
}
