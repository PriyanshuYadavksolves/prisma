import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(req,{params}){
    const id = params.id

    await prisma.post.delete({
        where:{id}
    })

    return NextResponse.json(req)
}