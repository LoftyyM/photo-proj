import Head from "next/head";
import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import { motion } from "framer-motion";

import { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1
};

const tabs = [
  {
    key: "TAB1",
    display: "All",
  },
  {
    key: "TAB2",
    display: "Rebeca",
  },
  {
    key: "TAB3",
    display: "Francisco",
  },
  {
    key: "TAB4",
    display: "Abigail",
  },
  {
    key: "TAB5",
    display: "Producto",
  },
  {
    key: "TAB6",
    display: "Nature & Landscapes",
  },
  {
    key: "TAB7",
    display: "Portrait",
  },
  {
    key: "TAB8",
    display: "Monica",
  },
];

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );
  const { data: allImages } = await supabaseAdmin
    .from("images")
    .select("*")
    .order("id");
  const { data: rebecaImages } = await supabaseAdmin
    .from("Rebeca")
    .select("*")
    .order("id");
  const { data: franciscoImages } = await supabaseAdmin
    .from("Francisco")
    .select("*")
    .order("id");
  const { data: abigailImages } = await supabaseAdmin
    .from("Abigail")
    .select("*")
    .order("id");
  const { data: productoImages } = await supabaseAdmin
    .from("Producto")
    .select("*")
    .order("id");
  const { data: nlImages } = await supabaseAdmin
    .from("Nature&Landscapes")
    .select("*")
    .order("id");
  const { data: portraitImages } = await supabaseAdmin
    .from("Portrait")
    .select("*")
    .order("id");
  const { data: monicaImages } = await supabaseAdmin
    .from("Monica")
    .select("*")
    .order("id");
  return {
    props: {
      allImages,
      rebecaImages,
      franciscoImages,
      abigailImages,
      productoImages,
      nlImages,
      portraitImages,
      monicaImages,
    },
  };
}

export default function Gallery({
  allImages,
  rebecaImages,
  franciscoImages,
  abigailImages,
  productoImages,
  nlImages,
  portraitImages,
  monicaImages,
}: {
  allImages: Image[];
  rebecaImages: Image[];
  franciscoImages: Image[];
  abigailImages: Image[];
  productoImages: Image[];
  nlImages: Image[];
  portraitImages: Image[];
  monicaImages: Image[];
}) {
  const lightboxRef = useRef<LightGallery | null>(null);
  const [isLoading, setLoading] = useState(true);
  const ref = useRef<null | HTMLDivElement>(null);
  const scrollClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
;
  return (
    <>
      <Head>
        <title>PHOTO</title>
        <meta name="description" content="Proyect Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" h-screen bg-scroll bg-manzana-Image  bg-cover overflow-auto priority  ">
        <DynamicHeader
          className={
            "flex justify-between items-center  fixed top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 "
          }
        />
        <div className="h-screen flex place-content-center items-center text-6xl ">
          <div className="fixed z-0">
            <motion.h1
              animate={{ color:'#fff', opacity: 1, scale: 1 }}
              transition={{
                default: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                },
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black inline-block text-transparent bg-clip-text"
            >
              - PORTFOLIO -
            </motion.h1>
            <motion.p
              
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-3xl font-semibold italic text-gray-900 "
            >
              By Sean Smith
            </motion.p>
          </div>
          <Image
            alt=""
            width={0}
            height={3.5}
            src="../scrollDown.svg"
            className="fixed bottom-10  animate-bounce w-6 h-6 cursor-pointer "
            onClick={scrollClick}
          />
        </div>

        <main>
          <div
            ref={ref}
            className=" relative  flex flex-col items-center h-full bg-stone-900"
          >
            <Tab.Group>
              <Tab.List className="bg-stone-900 pt-5 pb-5 z-30 flex flex-wrap justify-center w-full gap-4 md:gap-12 sticky top-0">
                {tabs.map((tab) => (
                  <Tab key={tab.key} className=" p-2">
                    {({ selected }) => (
                      <span
                        className={classNames(
                          " uppercase",
                          selected ? "text-white" : "text-stone-600"
                        )}
                      >
                        {tab.display}
                        onClick={scrollClick}
                      </span>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 max-w-screen-lg   ">
                <Tab.Panel className="PANEL1">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {           allImages.map((image) => (
                        <Image
                          alt=""
                          src={image.imageSrc}
                          width={500}
                          height={500}
                          className={cn(
                            "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                            isLoading
                              ? "grayscale blur-2xl scale-110"
                              : "grayscale-0 blur-0 scale-100"
                          )}
                          onLoadingComplete={() => setLoading(false)}
                          onClick={() => {
                            lightboxRef.current?.openGallery(image.id - 1);
                          }}
                        />
                      ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={allImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL2">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {rebecaImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={rebecaImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL3">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {franciscoImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={franciscoImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.imageSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL4">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {abigailImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={abigailImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL5">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {productoImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={productoImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL6">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {nlImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={nlImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL7">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {portraitImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={portraitImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL8">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {monicaImages.map((image) => (
                      <Image
                        alt=""
                        src={image.imageSrc}
                        width={500}
                        height={500}
                        className={cn(
                          "my-4 hover:opacity-75 duration-700 ease-in-out cursor-pointer",
                          isLoading
                            ? "grayscale blur-2xl scale-110"
                            : "grayscale-0 blur-0 scale-100"
                        )}
                        onLoadingComplete={() => setLoading(false)}
                        onClick={() => {
                          lightboxRef.current?.openGallery(image.id - 1);
                        }}
                      />
                    ))}
                  </Masonry>
                  <LightGalleryComponent
                    onInit={(ref) => {
                      if (ref) {
                        lightboxRef.current = ref.instance;
                      }
                    }}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    dynamic
                    dynamicEl={monicaImages.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.thumbSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </main>
        <DynamicFooter
          className={"flex lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 py-5"}
        />
      </div>
    </>
  );
}
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Image = {
  thumbSrc: any;
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  proyecto: string;
};
