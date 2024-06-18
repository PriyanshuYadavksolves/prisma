import prisma from "@/lib/prisma";

export async function POST(req) {
  const res = await req.json();
  const { title, content } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published:true,
      author: {
        create: {name: "Priyanshu"}
      }
    },
  });

  return Response.json({ data: result });
}
