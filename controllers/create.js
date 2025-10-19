import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();

let createOne = async(req,res,next)=>{
    try{
        let dataProject = req.body;
        const newProject = await Prisma.proyecto.create({
            data: dataProject
        })
        return res.status(201).json({
            success:true,
            message:"Project created successfully",
            response:newProject
        })
    } catch(error){
        next(error);
    }
}
export default createOne;