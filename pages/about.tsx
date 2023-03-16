import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Proyect Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto  ">
        <DynamicHeader
          className={
            "flex justify-between items-center  relative top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5"
          }
        />
        <main className="flex justify-center items-center h-full ">
          <div className=" text-white   bg-stone-700 rounded-full  px-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porttitor posuere nunc eget consequat. Morbi condimentum tristique
            nisi in dictum. Etiam vehicula cursus augue ut dictum. In ultricies
            at elit sed pretium. Curabitur at laoreet leo, id facilisis nisi.
            Pellentesque nec egestas turpis, sit amet ultrices dolor. Donec sed
            blandit lectus. Praesent eget mauris vel est pellentesque
            consectetur non eu eros. Nullam pretium elit malesuada ligula
            mattis, nec finibus nisl mollis. Sed ac libero a metus mollis
            maximus vel ut dui. Etiam viverra rutrum imperdiet. Nam semper
            tempus orci, sed elementum libero euismod vel. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Donec dignissim convallis maximus. Maecenas interdum
            neque et condimentum cursus. Quisque sed ligula quis orci iaculis
            egestas. Nullam efficitur lectus ultrices finibus pellentesque.
            Vestibulum sodales, quam ut viverra elementum, felis ipsum suscipit
            felis, at tincidunt orci dolor ut metus. Quisque eget diam in ex
            faucibus iaculis. Mauris bibendum nunc in erat varius maximus. Sed
            gravida mattis rutrum. Duis maximus nisi elit, eget ultricies erat
            consectetur a. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Etiam vehicula odio et purus
            semper efficitur. Curabitur vel sapien fermentum, convallis augue
            quis, pharetra mi. Nam lobortis ipsum volutpat hendrerit mollis.
            Maecenas non arcu tempor, elementum velit a, egestas lectus. Nulla
            pulvinar orci porta libero facilisis lobortis. Nam nec consequat
            odio. Phasellus quis nibh eget justo accumsan maximus. Nam mattis
            quis lacus pharetra consequat. Duis est lorem, faucibus quis porta
            vitae, sodales eget sapien. Ut eu purus et dui pharetra tristique.
            Etiam gravida dolor in nunc commodo euismod. Mauris efficitur dui
            sed arcu finibus posuere. Quisque malesuada magna quam, in
            sollicitudin lorem porta feugiat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam vestibulum magna a sapien
            sodales, sed posuere ipsum volutpat. Pellentesque pellentesque, enim
            sed malesuada viverra, enim augue porta massa, vel tincidunt magna
            justo nec sapien. Donec blandit hendrerit laoreet. Vivamus in eros
            id sem consequat mattis at vel orci. Nam tincidunt augue sit amet
            ornare porttitor. Sed cursus, elit nec mattis facilisis, magna risus
            porttitor turpis, id finibus ex dolor vel augue. Aenean pulvinar
            elementum ex pretium tristique. Nam at mi leo. In pellentesque,
            purus eu maximus ornare, ante lorem facilisis augue, in blandit
            justo mi ut erat. Nulla sed imperdiet metus. Vestibulum dapibus,
            lectus vel posuere varius, turpis lacus bibendum eros, non laoreet
            ante nulla at neque. Sed eget pellentesque libero, nec pharetra
            ante. Nulla consequat feugiat ultrices. Nam semper augue tempor sem
            ullamcorper, vel suscipit augue porttitor.
          </div>
        </main>
        <DynamicFooter
          className={"flex lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 py-5"}
        />
      </div>
    </>
  );
}
export default About;
