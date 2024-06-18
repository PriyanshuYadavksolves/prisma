import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";

async function getPost() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}


export default async function Home() {
  const posts = await getPost();

  return (
    <main className="grid place-items-center">
      <Link href='/add-post'>Add Post</Link>
      <h1>feed</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author.name}
        />
      ))}

    </main>
  );
}
