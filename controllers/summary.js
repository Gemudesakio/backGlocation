import { summarizeText } from '../services/aiService.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let getProjectSummary = async (req, res, next) => {
    try {
    const projects = await prisma.proyecto.findMany({
        select: { descripcion: true },
    });

    const allDescriptions = projects.map(p => p.descripcion).join('\n');

    const resumen = await summarizeText(allDescriptions);

    res.status(200).json({ success: true, resumen });
    } catch (err) {
    console.error('Error generando resumen:', err);
    next(err);
    }
};

export default getProjectSummary;
