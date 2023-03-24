import { DynamicHeader, DynamicFooter } from "../Components/dynamicSource";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../Components/blogCard";
import { Key } from "react";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clfko7lhe0uht01ur0asy57zn/master"
);

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
      coverPhoto {
        id
        url
      }
    }
  }
`;

export async function getStaticProps() {

  const { posts }:{posts:any} = await graphcms.request(query);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function blog({posts}:{posts:any}) {
  
  return (
    <>
      <Head>
        <title>Blog</title>
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
        <main className="grid grid-cols-2 grid-rows-2 h-full ">
          {posts.map((post: { title: any; author: any; coverPhoto: any; id: Key | null | undefined; datePublished: any; slug: any; }) => (
            
            <BlogCard
              title={post.title}
              author={post.author}
              coverPhoto={post.coverPhoto}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
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

