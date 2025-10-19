import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

let updateOne = async (req, res, next) => {
    try {
        let idProject = parseInt(req.params.id); 
        let dataProject = req.body;
        let updatedProject = await Prisma.proyecto.update({
            where: { id: idProject },
            data: dataProject
        });
        return res.status(200).json({
            success: true,
            message: "Project updated successfully",
            response: updatedProject
        })
    } catch (error) {
        next(error);
    }
}

export default updateOne;