import Head from "next/head";
import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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
    .from("images")
    .select()
    .eq("proyecto", "Rebeca");
  const { data: franciscoImages } = await supabaseAdmin
    .from("images")
    .select()
    .eq("proyecto", "Francisco").order("id");
  const { data: abigailImages } = await supabaseAdmin
    .from("images")
    .select()
    .eq("proyecto", "Abigail");
  const { data: productoImages } = await supabaseAdmin
    .from("images")
    .select()
    .eq("proyecto", "Producto");
  return {
    props: {
      allImages,
      rebecaImages,
      franciscoImages,
      abigailImages,
      productoImages,
    },
  };
}

export default function Gallery({
  allImages,
  rebecaImages,
  franciscoImages,
  abigailImages,
  productoImages,
}: {
  allImages: Image[];
  rebecaImages: Image[];
  franciscoImages: Image[];
  abigailImages: Image[];
  productoImages: Image[];
}) {
  const lightboxRef = useRef<LightGallery | null>(null);
  const [isLoading, setLoading] = useState(true);
  const ref = useRef<null | HTMLDivElement>(null);
  const scrollClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>PHOTO</title>
        <meta name="description" content="Proyect Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" h-full bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto priority  ">
        <DynamicHeader className={"fixed top-0"} />
        <div className="h-screen flex place-content-center items-center text-6xl ">
          <div className="fixed z-0">
            <h1 className="font-bold">PORTFOLIO</h1>
            <p className="text-3xl font-semibold italic text-gray-900 ">
              By Sean Smith
            </p>
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

        <main className="fb-comments">
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
                      </span>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 max-w-screen-lg   ">
                <Tab.Panel className="PANEL1">
                  <Masonry
                    breakpointCols={3}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {allImages.map((image) => (
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
                    breakpointCols={3}
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
                          lightboxRef.current?.openGallery(image?.id - 1);
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
                    breakpointCols={3}
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
                          lightboxRef.current?.openGallery(image?.id -9);
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
                    breakpointCols={3}
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
                          lightboxRef.current?.openGallery(image?.id - 1);
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
                    breakpointCols={3}
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
                          lightboxRef.current?.openGallery(image?.id - 1);
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
              </Tab.Panels>
            </Tab.Group>
          </div>
        </main>
        <DynamicFooter className={""} />
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
