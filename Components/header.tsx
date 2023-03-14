import Link from "next/link";
import Head from "next/head";
import { twMerge } from "tailwind-merge";
import { FacebookIcon, WasaIcon, InstagramIcon } from "./icons";

export default function Header({ className, ...props }: { className: string }) {
  const headerClass = twMerge(`


  w-full
  px-5
  bg-stone-900
  overflow-auto
  
  
  ${className ?? ""}
  `);

  return (
    <>
      <header className={headerClass}>
        <div>
          <Link className="uppercase text-md font-medium text-white " href="/">
            Photography Portfolio
          </Link>
        </div>


        <div>
          <Link href={"#"}>About </Link>
          
          </div>



        <div className="flex flex-row items-center sm:gap-2 lg:gap-4 pr-2">
          
          <Link href={"https://www.facebook.com/smithloftyy/"}>
            <FacebookIcon />
          </Link>
          <Link href={"https://wa.me/17786829121"}>
            <WasaIcon />
          </Link>
          <Link href={"https://www.instagram.com/bubuluwu.jpeg/"}>
            <InstagramIcon />
          </Link>
          

          <Link
            href="/contact"
            className=" rounded-3xl bg-white text-stone-700 sm:px-3 sm:py-2  hover:bg-opacity-90 hover:bg-gray-600  hover:text-white "
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}
