import EditPostForm from "@/components/EditPostForm";

const getPostById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const posts = await getPostById(id);

  return (
    <div>
      <EditPostForm posts={posts} />
    </div>
  );
};

export default page;
