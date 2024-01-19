import Link from "next/link"


export default function Nav(){
    return(
        <>
        <div className="p-6 krabby text-2xl ">
<span><Link className=" absolute font-semibold scale-90 hover:scale-100 text-amber-600   duration-300" href="">KrustyKrab</Link></span>
        <nav className="flex justify-end text-lg text-blue-950">
                <Link className="px-2 scale-90 hover:scale-95 text-amber-600 hover:text-amber-700 duration-300" href="">Home</Link>
                <Link className="px-2 scale-90 hover:scale-95 text-amber-600 hover:text-amber-700 duration-300" href="">Favorite</Link>
                <Link className="px-2 scale-90 hover:scale-95 text-amber-600 hover:text-amber-700 duration-300" href="">About Uss</Link>
        </nav>
        </div>
        
        
        </>
    )
}