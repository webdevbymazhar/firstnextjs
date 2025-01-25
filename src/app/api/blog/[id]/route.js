import { DBConnect } from "@/config/DbConnect"
import { BlogModel } from "@/models/Blog"
import { NextResponse } from "next/server"

export async function GET(req,{params}) {
   DBConnect()
    try {
        
        let id = await params.id

        let blog = await BlogModel.findById(id)

        return NextResponse.json({
            blog
        },{status:200})

        
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            message : "Error in getting single blog"
        },{status:400})

    }
    
}

export async function DELETE(req,{params}) {

    try {
          
        let id = params.id
        
        let deleteblog = await BlogModel.findByIdAndDelete(id)

        return NextResponse.json({
            message : "Blog Deleted Successfully",
            deleteblog
        },{status:200})

        
    } catch (error) {
        return NextResponse.json({
            message : "Error in deleting blog"
        },{status:400})
    }
    
}

export async function PATCH(req,{params}) {

    try {

        let id = params.id
        let body = await req.json()

        let updatedblog = await BlogModel.findByIdAndUpdate(id,body,{new:true})

        return NextResponse.json({
            message : "Blog Updated Successfully",
            updatedblog
        })


        
    } catch (error) {
        return NextResponse.json({
            message : "Error in updating blog"
        },{status:400})
    }
    
}