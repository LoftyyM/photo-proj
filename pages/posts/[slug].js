import { DynamicHeader, DynamicFooter } from "../../Components/dynamicSource";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clfko7lhe0uht01ur0asy57zn/master"
);

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(query, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function blogPost({ post }) {
  return (
    <>
      <div className="flex flex-col overflow-auto  h-screen">
        <DynamicHeader
          className={
            "flex justify-between items-center  relative top-0 lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5"
          }
        />
        <main className=" sm:h-full px-6 py-6 text-zinc-400 bg-zinc-800">
          <div className="px-4">
            <img className="mx-auto h-auto pb-4 w-1/3" src={post.coverPhoto.url} alt="" />
            <div>
              <img className="w-10 rounded-full" src={post.author.avatar.url} alt="" />
              <div>
                <h6>By {post.author.name}</h6>
                <h6>{post.datePublished}</h6>
              </div>
            </div>

            <h2 className="py-6 text-xl ">{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
          </div>
        </main>
        <DynamicFooter
          className={"flex lg:h-20 xl:h-30 sm:h-16 md:h-20 px-5 py-5 relative bottom-0"}
        />
      </div>
    </>
  );
}

