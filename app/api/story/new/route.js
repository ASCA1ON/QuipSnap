import { connectToDB } from "@/utils/database"
import Story from '@/models/story'

export const POST = async(req,res)=>{
    const {userId, story, tag} = await req.json()

    try{
        await connectToDB()
        const newStory = new Story({
            creator: userId,
            story,
            tag
        })
        await newStory.save()
        return new Response(JSON.stringify(newStory),{status:201})
    }catch(error){
        return new Response("Failed to create a new Story :-(",{status:500})
    }
}