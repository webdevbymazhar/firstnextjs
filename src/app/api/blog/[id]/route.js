import { DbConnect } from "@/database/DbConnect"
import { blogModel } from "@/models/BlogModel"
import { NextResponse } from "next/server"

export async function GET(req,{params}) {

    DbConnect()

    try {

        let id = await params.id

        let blog = await blogModel.findById(id)

        return NextResponse.json({
            message : "Blog get successfully",
            blog
        }, {status:200}
        )
        
    } catch (error) {
        return NextResponse.json({
            message : "Error in getting blogs",
        },{status:400})
    }
    
}


export async function DELETE(req,{params}) {
DbConnect()
    try {

        let id = await params.id

        let deleteblog = await blogModel.findByIdAndDelete(id)

        return NextResponse.json({
            message : "Blog Deleted Successfully!"
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({
            message : "Error in deleting blog",
        },{status:400})
    }
    
}

export async function PATCH(req,{params}) {

    DbConnect()
    try {

        let id = await params.id
        let body = await req.json()

        let updatedBlog = await blogModel.findByIdAndUpdate(id,body,{new:true})

        return NextResponse.json({
            message : "Blog Updated",
            updatedBlog
        })
        
    } catch (error) {
        return NextResponse.json({
            message : "Error in updating blog",
        },{status:400})
    }
    
}


