import Link from "next/link";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
  description,
}: {
  title: any;
  author: any;
  coverPhoto: any;
  datePublished: any;
  slug: any;
  description: any;
}) {
  return (
    <div className=" mb-4  bg-stone-800 max-w-sm rounded-lg overflow-hidden shadow-lg">
      <Link href={"/posts/" + slug}>
        <div>
          <img className="w-full" src={coverPhoto.url} alt="" />
        </div>
      </Link>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h2>{title}</h2>
        </div>

        <div className="text-zinc-200 text-xl mb-2">
          <div className="text-red-300 pb-6"> {description}</div>

          <div>
            <img src={author.avatar.url} className="h-16" />
            <h3>{author.name}</h3>
          </div>
          <div className="">
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

type Posteos = {
  title: string;
  author: string;
  coverPhoto: string;
  key: any;
  datePublished: any;
  slug: any;
};
