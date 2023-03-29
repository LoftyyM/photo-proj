import Link from "next/link";
import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import Head from "next/head";
import { FacebookIcon, InstagramIcon, WasaIcon } from "../Components/icons";
import { useRef } from "react";
import Image from "next/image";

function About() {
  const ref = useRef<null | HTMLDivElement>(null);
  const scrollClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Proyect Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="  overflow-clip">
        <DynamicHeader
          className={
            "flex justify-between items-center  relative top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5"
          }
        />
        <main className="flex flex-col py-10 items-center sm:h-full  bg-stone-700">
          

            <img
              className="w-10/12 px-3 "
              src="https://loftyyportfolio.imgix.net/Nature%20ll%20Landscapes/NL%20-%20(12).jpg"
            />
            
          

          <div ref={ref} className="flex gap-20 text-white mx-4 my-4 ">
            <div className="mt-4 flex flex-col gap-4 ">
              <p>
                Welcome to my photography portfolio! My name is [Your Name], and
                I am a [Location]-based photographer with a passion for
                capturing the beauty and essence of the world around me through
                the lens of my camera.
              </p>
              <p>
                Photography has always been a part of my life, and I believe
                that every photograph has the power to tell a story, evoke
                emotions, and inspire the viewer. My style is creative, unique,
                and versatile, and I specialize in a range of photography
                genres, including landscape, portrait, nature, wildlife, and
                event photography.
              </p>
              <p>
                My portfolio showcases some of my best work, and I hope you
                enjoy browsing through the different galleries. Whether it's a
                stunning landscape shot, a candid portrait, or a breathtaking
                wildlife image, each photograph has been carefully composed,
                edited, and printed to ensure the highest quality.
              </p>
              <p>
                My goal as a photographer is to create images that not only
                capture the beauty of the moment but also create a lasting
                memory for my clients. I take pride in my work, and I am
                committed to providing a professional and personalized
                experience for every client.
              </p>
              <p>
                Thank you for visiting my photography portfolio, and please feel
                free to contact me if you have any questions or would like to
                discuss a potential project. I look forward to hearing from you
                and capturing your special moments!
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {" "}
              Socials:
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
          </div>
        </main>
        <DynamicFooter
          className={
            "flex lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 py-5 relative bottom-0"
          }
        />
      </div>
    </>
  );
}
export default About;
