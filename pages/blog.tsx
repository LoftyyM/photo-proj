import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../Components/blogCard";
import { Key } from "react";

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

      <div className="flex flex-col  bg-fixed bg-manzana-Image bg-center bg-cover overflow-auto  ">
        <DynamicHeader
          className={
            "flex justify-between items-center  relative top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5"
          }
        />
        <main className=" py-4 px-6 grid grid-cols-2 grid-rows-auto">
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              author={post.author}
              coverPhoto={post.coverPhoto}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
              description={post.description}
            />
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
  author: string;
  coverPhoto: string;
  key: any;
  datePublished: any;
  slug: any;
  content:any;
  description:any;
};
