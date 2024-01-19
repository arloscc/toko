import Link from "next/link"


export default function Nav(){
    return(
        <>
        <nav>
            <div className="flex justify-end">
                <span className="absoulte p-2 text-2xl font-bold justify-start flex"><Link className="justify-start" href="">KrustyKrabs</Link></span>
                <div className="text-2xl flex justify-end">

                <Link className="p-2" href="">Home</Link>
                <Link className="p-2" href="">Favorite</Link>
                <Link className="p-2" href="">About Uss</Link>
                </div>
            </div>
        </nav>
        
        
        </>
    )
}