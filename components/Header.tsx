"use client"

import ThemeContext from '@/app/(web)/context/themeContext'
import { IconBrightnessUp, IconMoonStars, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useContext } from 'react'


const links = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/rooms",
        name: "Rooms",
    },
    {
        link: "/contact",
        name: "Contact",
    },
]


function Header() {
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)

    return (
        <div className='px-4 py-7 mx-auto bg-teal-600 text-lg flex flex-wrap md:flex-nowrap items-center justify-between'>
            <div className='flex items-center w-full md:2/3'>
                <Link href={"/"} className='text-tertiary-light font-semibold text-lg'>
                    Kelvin Ward
                </Link>
                <ul className="flex items-center ml-5">
                    <li className='flex items-center'>
                        <Link href={"/auth"}>
                            <IconUser />
                        </Link>
                    </li>
                    <li className='ml-2'>
                        {darkTheme == true 
                            ? <IconMoonStars onClick={() => {
                                setDarkTheme(false)
                                localStorage.removeItem("hotel-theme")
                            }} className='cursor-pointer'/> 
                            : <IconBrightnessUp onClick={() => {
                                setDarkTheme(true);
                                localStorage.setItem("hotel-theme", "true")
                            }} className='cursor-pointer'/>
                        }
                    </li>
                </ul>
            </div>
            <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
                {links.map((link, index) => (
                    <li key={index} className='hover:-translate-y-2 duration-500 transition-all text-white ml-2'>
                        <Link href={`/${link.link}`}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header