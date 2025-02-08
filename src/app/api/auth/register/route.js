import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import userModel from "@/models/UserModel";
import { DbConnect } from "@/database/DbConnect";

export async function POST(req) {

    DbConnect()

    try {
        
        let {username, email, password} = await req.json()

        let encryptPassword = await bcrypt.hash(password,10)

        let newUser = await userModel.create({username, email, password : encryptPassword})

        return NextResponse.json({
            success:true,
            newUser
        },{status:200})

    } catch (error) {
        return NextResponse.json({
            message : "Error in registering user"
        },{status:400})
    }
    
}