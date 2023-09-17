"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditPostForm = ({ id, title, description }) => {
  const router = useRouter();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/post/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to fatch post");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Post Title"
        className="border border-slate-500 px-8 py-3"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Post Description"
        className="border border-slate-500 px-8 py-3"
      />

      <button
        type="submit"
        className="bg-green-600 text-white font-bold px-6 py-3 w-fit"
      >
        Update Post
      </button>
    </form>
  );
};

export default EditPostForm;
