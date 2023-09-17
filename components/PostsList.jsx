import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const getAllPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/post", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading posts: ", error);
  }
};

export default async function PostsList() {
  const posts = await getAllPosts();

  return (
    <>
      {posts?.posts.map((post) => {
        return (
          <div
            className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5"
            key={post._id}
          >
            <div>
              <h2 className="font-bold text-2xl">{post.title}</h2>
              <p>{post.description}</p>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={post._id} />
              <Link href={`/edit-post/${post._id}`}>
                <HiPencilAlt size={25} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
