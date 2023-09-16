import React from "react";

const page = () => {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Post Title"
          className="border border-slate-500 px-8 py-3"
        />

        <input
          type="text"
          placeholder="Post Description"
          className="border border-slate-500 px-8 py-3"
        />

        <button className="bg-green-600 text-white font-bold px-6 py-3 w-fit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default page;
