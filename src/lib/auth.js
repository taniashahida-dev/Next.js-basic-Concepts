import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

 const client = new MongoClient(process.env.MONGO_DB)
 const db = client.db('better_auth')

export const auth = betterAuth({
   database : mongodbAdapter(db,{client}),
   emailAndPassword :{
    enabled:true
   }
})

export default auth;