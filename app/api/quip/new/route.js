import { connectToDB } from "@/utils/database"
import Quip from '@/models/quip'

export const POST = async(req,res)=>{
    const {userId, quip, tag} = await req.json()

    try{
        await connectToDB()
        const newQuip = new Quip({
            creator: userId,
            quip,
            tag
        })
        await newQuip.save()
        return new Response(JSON.stringify(newQuip),{status:201})
    }catch(error){
        return new Response("Failed to create a new Quip :-(",{status:500})
    }
}