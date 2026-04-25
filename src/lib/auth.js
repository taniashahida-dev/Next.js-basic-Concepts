import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

 const client = new MongoClient('process.env.MONGO_DB_PASS')
 const db = client.db('better_auth')

const auth = betterAuth({
   database : mongodbAdapter(db,{client})
})

export default auth;