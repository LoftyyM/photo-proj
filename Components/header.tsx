import Link from "next/link";
import Head from "next/head";
import { twMerge } from "tailwind-merge";

export default function Header({ className, ...props }: { className: string }) {
  const headerClass = twMerge(`
  
  w-full
  flex
  justify-between
  items-center
  sm:20
  md:h-20
  px-5
  bg-stone-900
  
  
  ${className ?? ""}
  `);

  return (
    <>
      <Head>
        <title>PHOTO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={headerClass}>
        <Link className="uppercase text-md font-medium text-white " href="/">
          Photography Portfolio
        </Link>

        <Link
          href="/contact"
          className=" rounded-3xl bg-white text-stone-700 sm:px-3 sm:py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
    </>
  );
}
