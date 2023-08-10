import { connectToDB } from "@/utils/database"
import Quip from '@/models/quip'

//* GET route
export const GET = async(req,{params})=>{

    try{
        await connectToDB()
        
        const quip = await Quip.findById(params.id).populate('creator')
        
        if(!quip){return new Response('Quip not found',{status:404})}
        
        return new Response(JSON.stringify(quip),{status:200})
    }catch(error){
        return new Response("Failed to fetch quip :-(",{status:500})
    }
}

//* Patch
export const PATCH = async(req,{params})=>{
    const {quip, tag}= await req.json()

    try{
        await connectToDB()
        
        const existingQuip = await Quip.findById(params.id)
        
        if(!existingQuip){return new Response('Quip not found',{status:404})}

        existingQuip.quip = quip
        existingQuip.tag = tag

        await existingQuip.save()
        
        return new Response(JSON.stringify(existingQuip),{status:200})
    }catch(error){
        return new Response("Failed to update quip :-(",{status:500})
    }
}

//* Delete
export const DELETE = async(req,{params})=>{

    try{
        await connectToDB()
        
        await Quip.findByIdAndRemove(params.id)
        
        return new Response('Quip deleted sucessfully ',{status:200})
    }catch(error){
        return new Response("Failed to delete quip :-(",{status:500})
    }
}