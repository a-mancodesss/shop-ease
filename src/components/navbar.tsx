"use client"
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
    const isLoggedIn:Boolean = false;
    const isOpen:Boolean = false;
  return (
    <div className='h-20  flex p-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 3xl:px-128 justify-between space-x-4'>
        <div className="left">
            <Link href={'/'} className="group flex text-2xl cursor-pointer">
            <span className='hidden sm:block group-hover:rotate-6 ease-in-out duration-700'>🛒</span>
            <div className="logo  bg-gradient-to-r from-orange-600 to-violet-500 bg-clip-text font-extrabold text-transparent">ShopEase </div>
            </Link>
        </div>
        <div className="right">
            <ul className='flex items-center space-x-2'>
                <ModeToggle/>
                <Link href={`/shop`}>Shop</Link>
                <Link href={`/Login`}>
                {isLoggedIn?'Aman':<>Login</>}
                </Link>
            </ul>
        </div>
    </div>
  )
}