import mongoose from "mongoose";

export async function DBConnect() {

    try {

        if(mongoose.connection.readyState >= 1){
            console.log("Db already connected!");
            return
            
        }

        let connection = await mongoose.connect(process.env.MONGO_URL)
        if(connection){
            console.log("DB Connected Successfully!"); 
        }
        
    } catch (error) {
        console.log("Error in connecting database!");
        
    }
    
}