import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"
import { headerMenuLinks } from "./data"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ICustomSheetProps {
    trigger: ReactNode
    className?: string
}

export default function CustomSheet({ className, trigger }: ICustomSheetProps) {
    const path = usePathname()

    return (
        <div className={className}>

            <Sheet>
                <SheetTrigger>{trigger}</SheetTrigger>
                <SheetContent >
                    <SheetHeader>
                        <SheetTitle className="text-white text-left pl-3">Menu</SheetTitle>
                        <SheetDescription >
                            <div className="overflow-y-scroll">
                                {headerMenuLinks.map(({ link, logo, title }, i) =>
                                    <Link href={link} className={cn('flex items-center gap-3 p-3 text-white text-xl', path === link && 'bg-[hsl(var(--main))] rounded-md')} key={i + 1}>
                                        <div >{logo}</div>
                                        <h3>{title}</h3>
                                    </Link>
                                )}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )

}