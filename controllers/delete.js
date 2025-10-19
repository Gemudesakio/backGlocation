import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

let DeleteOneParam = async (req, res, next) => {
    try {
        let idProject = parseInt(req.params.id);
        let deletedProject = await Prisma.Proyecto.delete({
            where: { id: idProject }
        });
        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            response: deletedProject
        })
    } catch (error) {
        next(error);
    }
} 

let DeleteOneBody = async (req, res, next) => {
    try {
        let idProject = parseInt(req.body.id);
        let deletedProject = await Prisma.Projecto.delete({
            where: { id: idProject }
        });
        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            response: deletedProject
        })
    }catch (error) {
        next(error);
    }
}

export { DeleteOneParam, DeleteOneBody };