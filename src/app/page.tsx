import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { clans, justice, officBattles } from "@/data";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex mt-8 gap-5 max-w-[1400px] w-full mx-auto px-5 relative">
      <div className="flex max-lg:hidden gap-5 flex-col max-w-[300px] w-full">
        <Card className="shadow-md shadow-[hsl(var(--main))] bg-[hsl(var(--grid))] text-white border-zinc-600 ">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Кланы</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            {clans.map(({ title }) => (
              <Link key={title} href={'/'}>{title}</Link>
            ))}
          </CardContent>
        </Card>
        <Card className="shadow-md shadow-[hsl(var(--main))] bg-[hsl(var(--grid))] text-white border-zinc-600 ">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Правосудие</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            {justice.map(({ title }) => (
              <Link key={title} href={'/'}>{title}</Link>
            ))}
          </CardContent>
        </Card>
        <Card className="shadow-md shadow-[hsl(var(--main))] bg-[hsl(var(--grid))] text-white border-zinc-600 ">
          {officBattles.map(({ title, text }) => (
            <div className="flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                <Link key={title} href={'/'}>{text}</Link>
              </CardContent>
            </div>
          ))}
        </Card>
      </div>
      {/* <Sidebar /> */}
      <Sidebar className="max-lg:block hidden" trigger={<X className=" text-white top-0 left-0 absolute" />} />
      <Card className="col-start-2 col-end-12 p-3 w-full bg-[hsl(var(--grid))] shadow-md shadow-[hsl(var(--main))] text-white border-zinc-600 flex flex-col items-center gap-5 justify-center">
        <Card className=" shadow-md shadow-[hsl(var(--main))] bg-[hsl(var(--grid))] text-white border-zinc-600 flex items-center justify-center">Video</Card>
        <Card className=" shadow-md shadow-[hsl(var(--main))] bg-[hsl(var(--grid))] text-white border-zinc-600 flex items-center justify-center">info</Card>
        <Card className=" shadow-md shadow-[hsl(var(--main))] bg-[hsl(var(--grid))] text-white border-zinc-600 flex items-center justify-center">Blog</Card>
      </Card>
    </div>
  );
}
