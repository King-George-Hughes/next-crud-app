import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-800 flex justify-between items-center px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        Coding
      </Link>
      <Link href={"/add-post"} className="bg-white py-2 px-4">
        Add Post
      </Link>
    </nav>
  );
};

export default NavBar;
