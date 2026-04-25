import Link from "next/link";


const Navbar = () => {
    return (
        <div className="p-2 text-lg  bg-gray-400 ">
            <div className="flex justify-center gap-10">
                <Link href='/'>Home</Link>
                <Link href='/Models'>Models</Link>
            </div>
        </div>
    );
};

export default Navbar;