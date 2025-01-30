import mongoose from "mongoose";

export async function DbConnect() {

    try {

       if(mongoose.connection.readyState >= 1){
        console.log("MongoDb is already connected");
        return 
        
       }
       
       let connected = await mongoose.connect(process.env.MONGO_URL)
       if(connected){
        console.log("Database connected!");
        
       }


    } catch (error) {
        console.log("Error in Connecting DB!");
    }
    
}