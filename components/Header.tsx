import { IconMoonStars, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'


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
    return (
        <div className='px-4 py-10 mx-auto bg-teal-600 text-lg flex flex-wrap md:flex-nowrap items-center justify-between'>
            <div className='flex items-center w-full md:2/3'>
                <Link href={"/"} className='font-black text-white'>
                    Kelvin Ward
                </Link>
                <ul className="flex items-center ml-5">
                    <li className='flex items-center'>
                        <Link href={"/auth"}>
                            <IconUser />
                        </Link>
                    </li>
                    <li className='ml-2'>
                        <IconMoonStars className='cursor-pointer'/>
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