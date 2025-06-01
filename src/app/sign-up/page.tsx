"use client"
import { Button, Input } from '@/components/ui'


export default function SignUp() {

    return (
        <form className=" max-w-[400px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col ">
                <div className="max-w-[400px] w-full mx-auto mt-8 flex flex-col text-white gap-1">
                    <label htmlFor="Full Name">Full Name</label>
                    <Input type="text" id="Full Name" placeholder="Full Name" />
                </div>
                <div className="max-w-[400px] w-full mx-auto mt-8 flex flex-col text-white gap-1">
                    <label htmlFor="email">Email</label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="max-w-[400px] w-full mx-auto mt-8 flex flex-col text-white gap-1">
                    <label htmlFor="password">Password</label>
                    <Input type="password" id="password" placeholder="Password" />
                </div>
            </div>
            <Button variant={'main'} className='w-[100px]'>Submit</Button>
        </form>
    )

}