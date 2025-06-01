"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { headerMenuLinks } from './data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Button } from '../ui'
import { FaBell } from "react-icons/fa";
import CustomSheet from './CustomSheet'

const Header = ({ }) => {
    const data = usePathname()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tooltip, setTooltip] = useState(false)
    const [tooltiptext, setTooltipText] = useState('')
    const [login, setLogin] = useState(false)

    return (
        <header className='border-b border-b-zinc-600 bg-[hsl(var(--grid))]'>
            <div className="text-white w-full max-w-[1404px] mx-auto px-4 flex flex-col py-2 gap-7">
                <div className="flex justify-between items-center">
                    <Link href={'/'} className="items-center gap-4 flex max-sm:hidden">
                        <Image alt="logo" src={'/x.jpg'} width={60} height={60} className="rounded-full max-lg:w-9 max-lg:h-9" />
                        <h2 className="text-4xl text-[hsl(var(--main))] font-bold max-lg:hidden">Jedi</h2>
                    </Link>
                    <CustomSheet
                        className='hidden max-sm:flex'
                        trigger={<Image alt="logo" src={'/x.jpg'} width={60} height={60} className="rounded-full max-lg:w-9 max-lg:h-9 " />}
                    />
                    <div className="max-sm:hidden flex max-lg:gap-2 gap-4 items-center">
                        {headerMenuLinks.map(({ link, logo, title }, i) =>
                            <div className='relative' key={i + 1}>
                                <Link
                                    onMouseEnter={() => {
                                        setTooltip(true)
                                        setTooltipText(title)
                                    }}
                                    onMouseLeave={() => {
                                        setTooltip(false)
                                        setTooltipText('')
                                    }}
                                    href={link}
                                    className={cn('max-lg:text-xl text-2xl hover:bg-[hsl(var(--main))] h-9 rounded-lg transition-colors ease-in-out duration-300 p-2 flex items-center', data === link && 'bg-[hsl(var(--main))]')}
                                >{logo}</Link>
                                <div className={cn("absolute w-[150px] text-center text-lg rounded-lg bg-[hsl(var(--main))] -left-[55px] -bottom-12 py-1 invisible -translate-y-1", tooltiptext === title ? 'visible -translate-y-0 transition-all ease-in-out duration-200' : '')}>{title}</div>
                            </div>
                        )}
                    </div>
                    {login === true ?
                        <div className="flex max-lg:gap-3 gap-6 items-center">
                            <Link
                                onMouseEnter={() => {
                                    setTooltip(true)
                                    setTooltipText('Message')
                                }}
                                onMouseLeave={() => {
                                    setTooltip(false)
                                    setTooltipText('')
                                }}
                                href={'/'} className="relative  hover:bg-[hsl(var(--main))] h-9 rounded-lg flex items-center p-2">
                                <FaBell className='text-xl' />
                                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-700" />
                                <div className={cn("absolute w-[150px] text-center text-lg rounded-lg bg-[hsl(var(--main))] -left-[55px] -bottom-12 py-1 invisible -translate-y-1", tooltiptext === 'Message' && 'visible -translate-y-0 transition-all ease-in-out duration-200')}>Message</div>
                            </Link>
                            <Link href={'/'} className="flex gap-2 items-center">
                                <div className="h-9 w-9 rounded-lg bg-black" />
                                <p>Name User</p>
                            </Link>
                        </div>
                        :
                        <div className="flex gap-2">
                            <Button variant={'main'} onClick={() => setLogin(true)}>Login</Button>
                            <Button variant={'main'}>
                                <Link href={'/sign-up'}>Sign Up</Link>
                            </Button>
                        </div>}
                </div>
            </div>
        </header>

    )

}

export default Header