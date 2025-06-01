"use client"
import React, { ReactNode } from 'react'
import { clans, justice, officBattles } from '@/data'
import { CardHeader, CardTitle, CardContent, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui'
import Link from 'next/link'

interface ISidebarProps {
    className?: string
    trigger: ReactNode
}

export default function Sidebar({ className, trigger }: ISidebarProps) {

    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger>{trigger}</SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetHeader>
                        <SheetDescription className=''>
                            <div className=" bg-[hsl(var(--grid))] text-white border-zinc-600 ">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-center">Кланы</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-1">
                                    {clans.map(({ title }) => (
                                        <Link key={title} href={'/'}>{title}</Link>
                                    ))}
                                </CardContent>
                            </div>
                            <div className=" bg-[hsl(var(--grid))] text-white border-zinc-600 ">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-center">Правосудие</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-1">
                                    {justice.map(({ title }) => (
                                        <Link key={title} href={'/'}>{title}</Link>
                                    ))}
                                </CardContent>
                            </div>
                            <div className=" bg-[hsl(var(--grid))] text-white border-zinc-600 ">
                                {officBattles.map(({ title, text }) => (
                                    <div key={title} className="flex flex-col">
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-2xl text-center">{title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col gap-1">
                                            <Link key={title} href={'/'}>{text}</Link>
                                        </CardContent>
                                    </div>
                                ))}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

    )

}