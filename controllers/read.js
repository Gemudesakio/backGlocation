import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

let readAll = async (req, res, next) => {
    try {
        let allProjects = await Prisma.proyecto.findMany();
        return res.status(200).json({
            success: true,
            message: "Projects obtained successfully",
            response: allProjects
        })
    } catch (error) {
        next(error);
    }
}
export default readAll;