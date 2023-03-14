import { twMerge } from "tailwind-merge"

export default function Footer({ className, ...props }) {
  const footerClass = twMerge(`
  h-[90px]
  w-full
  z-40
  bg-stone-900
  flex
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
        <p> FOOTER PLACEHOLDER </p>
      </footer>
    </>
  );
}
