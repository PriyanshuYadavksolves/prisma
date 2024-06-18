"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
      });
      router.refresh()
    } catch (error) {
        console.error(error)
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded shadow-md mt-40 text-black"
    >
        <Link href='/'>View Data</Link>
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="5"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default page;
