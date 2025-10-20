import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let getProjectStats = async (req, res, next) => {
    try {
    const results = await prisma.proyecto.groupBy({
        by: ['estado'],
        _count: { estado: true },
    });

    const formatted = {
        finalizados: results.find(r => r.estado === true)?._count.estado || 0,
        enProceso: results.find(r => r.estado === false)?._count.estado || 0,
    };

    return res.status(200).json({
        success: true,
        stats: formatted,
    });
    } catch (err) {
    next(err);
    }
};

export default getProjectStats;