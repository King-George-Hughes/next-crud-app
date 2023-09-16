import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

const PostsList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5">
        <div>
          <h2 className="font-bold text-2xl">Post Title</h2>
          <p>Post Description</p>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/edit-post/123"}>
            <HiPencilAlt size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostsList;
