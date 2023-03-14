import Header from "../Components/header";
import Footer from "../Components/footer";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

import { useRef } from "react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { arrayBuffer } from "stream/consumers";

const tabs = [
  {
    key: "TAB1",
    display: "TAB1",
  },
  {
    key: "TAB2",
    display: "TAB2",
  },
  {
    key: "TAB3",
    display: "TAB3",
  },
  {
    key: "TAB4",
    display: "TAB4",
  },
  
];

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );
  const { data } = await supabaseAdmin.from("images").select("*").order("id");
  return {
    props: {
      images: data,
    },
  };
}

export default function Gallery({ images }: { images: Image[] }) {
  const lightboxRef = useRef<LightGallery | null>(null);
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className=" h-full bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto ">
        <Header />
        <main className="pt-[110px]">
          <div className="flex flex-col items-center h-full bg-stone-900">
            <Tab.Group>
              <Tab.List className=" z-30 pt-[20px] flex w-full place-content-center items-center gap-12 sticky top-0">
                {tabs.map((tab) => (
                  <Tab key={tab.key} className="p-2">
                    {({ selected }) => (
                      <span
                        className={classNames(
                          "uppercase",
                          selected ? "text-white" : "text-stone-600"
                        )}
                      >
                        {tab.display}
                      </span>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
                <Tab.Panel className="PANEL1">
                  <Masonry
                    breakpointCols={2}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {images.map((image) => (
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
                    dynamicEl={images.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.imageSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
                <Tab.Panel className="PANEL2">
                  <Masonry
                    breakpointCols={2}
                    className="flex gap-4"
                    columnClassName=""
                  >
                    {images.map((image) => (
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
                    dynamicEl={images.map((image) => ({
                      src: image.imageSrc,
                      thumb: image.imageSrc,
                    }))}
                  ></LightGalleryComponent>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};
