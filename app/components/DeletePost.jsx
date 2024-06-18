"use client"

import { useRouter } from "next/navigation";

const DeletePost = ({ postId }) => {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button onClick={handleClick} className="px-4 py-1 bg-teal-600 rounded-md">
      Delete
    </button>
  );
};

export default DeletePost;
