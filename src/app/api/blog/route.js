// GET,POST,DELETE,PUT,PATCH

import { DbConnect } from "@/database/DbConnect";
import { blogModel } from "@/models/BlogModel";
import { NextResponse } from "next/server";

export async function POST(req) {
   DbConnect()
    try {

        let data = await req.json()

        let blog = await blogModel.create(data)

        return NextResponse.json({
            message : "Blog Created Successfully!",
            blog
        })

    } catch (error) {

        return NextResponse.json({
            message : "Error in posting data"
        },{status:400})
        
    }
    
}


export async function GET(req) {

  DbConnect()
    try {
        
        let blogs = await blogModel.find()

        return NextResponse.json({
            blogs
        },{status:200})

        
    } catch (error) {
        return NextResponse.json({
            message : "Error in getting data"
        },{status:400})
    }
    
}