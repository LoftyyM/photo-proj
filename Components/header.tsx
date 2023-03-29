import Link from "next/link";
import Head from "next/head";
import { twMerge } from "tailwind-merge";
import { FacebookIcon, WasaIcon, InstagramIcon } from "./icons";
import { motion } from "framer-motion";

const divMotionLeft = {
  hidden: { x: -500 },
  show: {
    x: 0,
    transition: {
      default: {
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  },
};
const divContainerRight = {
  hidden: { x: 500 },
  show: {
    x: 0,
    transition: {
      delayChildren: 0.1,
      default: {
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  },
};
const divContainerItem = {
  hidden: { x: 500 },
  show: {
    x: 0,
    transition: {
      delayChildren: 0.5,
      default: {
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  },
};

export default function Header({ className, ...props }: { className: string }) {
  const headerClass = twMerge(`

  w-full
  px-5
  bg-stone-900
  
  
  ${className ?? ""}
  `);

  return (
    <>
      <header className={headerClass}>
        <motion.div variants={divMotionLeft} initial="hidden" animate="show">
          <Link
            className="uppercase text-md font-medium text-white hover:opacity-80"
            href="/"
          >
            Photography Portfolio
          </Link>
        </motion.div>

        <motion.div
          variants={divContainerRight}
          initial="hidden"
          animate="show"
          className="flex flex-row items-center sm:gap-3 lg:gap-4 pr-2 "
        >
          <motion.div variants={divContainerItem}>
            <Link href="/blog" className="hover:opacity-70 sm:px-3 sm:py-2   text-white">
              Blog
            </Link>
          </motion.div>

          <motion.div variants={divContainerItem}>
            <Link href="/about" className="hover:opacity-70 sm:px-3 sm:py-2   text-white">
              About
            </Link>
          </motion.div>

          <motion.div variants={divContainerItem}>
            <Link
              href="/contact"
              className="  hover:opacity-70 sm:px-3 sm:py-2   text-white "
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </header>
    </>
  );
}
