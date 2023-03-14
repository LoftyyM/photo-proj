import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WasaIcon } from "./icons";

export default function Footer({ className, ...props }: { className: string }) {
  const footerClass = twMerge(`
  h-[90px]
  w-full
  z-40
  bg-stone-900
  flex
  flex-col
  justify-center
  items-center
  uppercase
  text-lg
  font-medium
  relative
  
  ${className ?? ""}
  `);

  return (
    <>
      <footer className={footerClass}>
        <div>
          <p> Copyright © 2023 Mamarre Inc. </p>
        </div>

        <div className="flex items-center">
          <Link href={"https://www.facebook.com/smithloftyy/"}>
            <FacebookIcon />
          </Link>
          <Link href={"https://wa.me/17786829121"}>
            <WasaIcon />
          </Link>
          <Link href={"https://www.instagram.com/bubuluwu.jpeg/"}>
            <InstagramIcon />
          </Link>
        </div>
      </footer>
    </>
  );
}
