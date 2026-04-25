'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";


const Navbar = () => {
    const {data} = authClient.useSession()
    const user = data?.user

    const handleLogOut = () => {
        authClient.signOut()
    }
    return (
        <div className="p-2 text-lg  bg-gray-400 ">
            <div className="flex justify-center gap-10 items-center">
                <Link href='/'>Home</Link>
                <Link href='/Models'>Models</Link>
                <Link href='/signUp'>Signup</Link>
                <Link href='/signin'>Signin</Link>
               <p className="text-lg text-blue-900 ">{user?.name}</p>
                   <Button onClick={handleLogOut}> <Link href='/'>Logout</Link></Button>
               
            </div>
        </div>
    );
};

export default Navbar;