import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="">
        <div className="w-scren h-[90vh] items-center flex justify-center">
          <div className=" flex items-center gap-96">
            <div className="krabby text-6xl text-amber-600">
              <h1>Savor the joy of life like a </h1>
              <h1>Krabby Patty .</h1>
              <button className="px-4 py-2 hover:text-amber-600 hover:bg-amber-400  bg-amber-600 text-amber-400 scale-90 text-2xl rounded-xl hover:scale-100 duration-300">
                <Link className="" href="">
                  More
                </Link>
              </button>
            </div>

            <Image
              className="scale-50"
              src="/krabby.webp"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}
