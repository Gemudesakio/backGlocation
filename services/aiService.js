import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const summarizeText = async (text) => {
    try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Eres un redactor técnico. Escribe un resumen NATURAL, claro y conciso en español
a partir del siguiente listado de descripciones de proyectos:\n${text}`,
    });
    return response.text;
    } catch (error) {
    const err = new Error('Error al generar resumen con Gemini');
    err.status = 502;
    err.details = error.message || 'Fallo inesperado de la API';
    throw err;
    }
};
