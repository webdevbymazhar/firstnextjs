
import { DbConnect } from "@/database/DbConnect";
import userModel from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function POST(req) {
   DbConnect()
    try {

        let {email,password} = await req.json()

        let user = await userModel.findOne({email})

        if(!user){
            return NextResponse.json({
                message : "Invalid Email or Password"
            })
        }

        let matchPassword = await bcrypt.compare(password,user.password)
        
        if(!matchPassword){
            return NextResponse.json({
                message : "Invalid Email or Password"
            })
        }

        var token = await new SignJWT({id : user._id})
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('20m')
        .setIssuedAt()
        .sign(new TextEncoder().encode("thisismysecretjwtkey0191290129029"));

        cookies().set("token",token)

        return NextResponse.json({
            success:true,
            message : "User Logged In",
            token
        },{status:200})
        


    } catch (error) {
        return NextResponse.json({
            message : "Error loggin in"
        },{status:400})
    }
    
}