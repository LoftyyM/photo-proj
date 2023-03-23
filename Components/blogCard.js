import Link from "next/link";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className=" text-red-500">
      <Link href={"/posts/" + slug}>
        <div >
          <img className="h-32" src={coverPhoto.url} alt="" />
        </div>
      </Link>

      <div>
        <div className="">
          <h2>{title}</h2>
        </div>

        <div className="">
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
