import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";

import { Key } from "react";
import Link from "next/link";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL || "");

const query = gql`
  {
    posts {
      id
      title
      slug
      datePublished
      author {
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      description
      coverPhoto {
        id
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts }: { posts: Posteos[] } = await graphcms.request(query);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function blog({ posts }: { posts: Posteos[] }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Proyect Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col  bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto  h-screen">
        <DynamicHeader
          className={
            " w-full px-5 bg-stone-900 overflow-hidden flex justify-between items-center relative top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5"
          }
        />
        <main className=" py-4 px-6 grid grid-cols-2 grid-rows-auto grow">
          {posts.map((post) => (
            


            <div className="mb-6 bg-stone-800 max-w-sm rounded-lg overflow-hidden shadow-lg">
      <Link href={"/posts/" + post.slug}>
        <div>
          <img className="w-full" src={post.coverPhoto.url} alt="" />
        </div>
      </Link>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h2>{post.title}</h2>
        </div>

        <div className="text-zinc-200 text-xl mb-2">
          <div className="text-red-300 pb-6"> {post.description}</div>

          <div>
            <img src={post.author.avatar.url} className="h-16 rounded-full" />
            <h3>{post.author.name}</h3>
          </div>
          <div className="">
            <h3>{post.datePublished}</h3>
          </div>
        </div>
      </div>
    </div>



          ))}
        </main>

        <DynamicFooter
          className={"flex lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 py-5"}
        />
      </div>
    </>
  );
}

type Posteos = {
  id: Key | null | undefined;
  title: any;
  author: any;
  coverPhoto: any;
  key: any;
  datePublished: any;
  slug: any;
  content:any;
  description:any;
};
