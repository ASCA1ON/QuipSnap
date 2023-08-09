import { connectToDB } from "@/utils/database"
import Quip from '@/models/quip'

export const GET = async(req,res)=>{

    try{
        await connectToDB()
        
        const quips = await Quip.find({}).populate('creator')

        return new Response(JSON.stringify(quips),{status:200})
    }catch(error){
        return new Response("Failed to fetch quips :-(",{status:500})
    }
}