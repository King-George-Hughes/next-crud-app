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
  const { title, description } = posts.post;

  return (
    <div>
      <EditPostForm id={id} title={title} description={description} />
    </div>
  );
};

export default page;
