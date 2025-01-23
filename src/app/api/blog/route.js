// GET,POST,PATCH,PUT,DELETE

import { DBConnect } from "@/config/DbConnect";
import { BlogModel } from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
   DBConnect()
    try {

        let data = await req.json()

        let blog = await BlogModel.create(data)

        return NextResponse.json({
            message : "Blog created successfully!",
            blog
        },{status:200})
        
    } catch (error) {
       return NextResponse.json({
        message : "Error in posting data"
       },{status:400})
    }
    
}

export async function GET(req) {
DBConnect()
    try {

        let blogs = await BlogModel.find()
        
        return NextResponse.json({
            blogs
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            message : "Error in getting data"
        }, {status:400})
    }
    
}