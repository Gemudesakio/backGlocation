/**
 * @swagger
 * tags:
 *   name: Proyectos
 *   description: Endpoints para la gestión de proyectos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Proyecto:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del proyecto
 *           example: 1
 *         nombre:
 *           type: string
 *           description: Nombre del proyecto
 *           example: "Sistema de reservas"
 *         descripcion:
 *           type: string
 *           description: Descripción opcional del proyecto
 *           example: "Aplicación web para agendar citas y gestionar clientes"
 *         estado:
 *           type: boolean
 *           description: Estado del proyecto (false = En progreso, true = Finalizado)
 *           example: false
 *         fechaInicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio del proyecto
 *           example: "2025-10-22"
 *         fechaFin:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Fecha de finalización del proyecto
 *           example: "2025-12-31"
 */

/**
 * @swagger
 * /api/projects/all:
 *   get:
 *     summary: Obtener todos los proyectos
 *     tags: [Proyectos]
 *     responses:
 *       200:
 *         description: Lista de todos los proyectos registrados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Proyectos obtenidos correctamente"
 *                 response:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Proyecto'
 */

/**
 * @swagger
 * /api/projects/create:
 *   post:
 *     summary: Crear un nuevo proyecto
 *     tags: [Proyectos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proyecto'
 *     responses:
 *       201:
 *         description: Proyecto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Proyecto creado exitosamente"
 *                 response:
 *                   $ref: '#/components/schemas/Proyecto'
 *       400:
 *         description: Error de validación en los datos enviados
 */

/**
 * @swagger
 * /api/projects/update/{id}:
 *   put:
 *     summary: Actualizar un proyecto existente
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proyecto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proyecto'
 *     responses:
 *       200:
 *         description: Proyecto actualizado correctamente
 *       400:
 *         description: Error de validación en los datos enviados
 *       404:
 *         description: Proyecto no encontrado
 */

/**
 * @swagger
 * /api/projects/deleteParam/{id}:
 *   delete:
 *     summary: Eliminar un proyecto usando el parámetro ID en la URL
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proyecto a eliminar
 *     responses:
 *       200:
 *         description: Proyecto eliminado correctamente
 *       404:
 *         description: Proyecto no encontrado
 */

/**
 * @swagger
 * /api/projects/deleteBody:
 *   delete:
 *     summary: Eliminar un proyecto enviando su ID en el cuerpo de la solicitud
 *     tags: [Proyectos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Proyecto eliminado correctamente
 *       404:
 *         description: Proyecto no encontrado
 */
/**
 * @swagger
 * /api/projects/graphics:
 *   get:
 *     summary: Obtener conteo agregado de proyectos por estado
 *     description: Devuelve la cantidad de proyectos finalizados y en proceso.
 *     tags: [Proyectos]
 *     responses:
 *       200:
 *         description: Conteo agregado por estado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 stats:
 *                   type: object
 *                   properties:
 *                     finalizados:
 *                       type: integer
 *                       example: 2
 *                     enProceso:
 *                       type: integer
 *                       example: 4
 *       500:
 *         description: Error interno al calcular las estadísticas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

/**
 * @swagger
 * /api/projects/summary:
 *   get:
 *     summary: Generar resumen de descripciones de proyectos con IA
 *     description: Usa el modelo generativo configurado en el backend para producir un resumen en español de las descripciones de todos los proyectos.
 *     tags: [Proyectos]
 *     responses:
 *       200:
 *         description: Resumen generado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 resumen:
 *                   type: string
 *                   example: "La cartera incluye un panel analítico financiero, una app móvil de salud y un sistema de gestión de cursos, destacando entregas a tiempo y foco en valor de negocio."
 *       502:
 *         description: Error al invocar el proveedor de IA
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Error al generar resumen con Gemini"
 *                 details:
 *                   type: string
 *                   example: "Provider 502: límite de cuota excedido"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */


import { Router } from "express";
import createOne from "../controllers/create.js";
import readAll from "../controllers/read.js";
import updateOne from "../controllers/update.js";
import { DeleteOneBody, DeleteOneParam } from "../controllers/delete.js";
import getProjectStats from "../controllers/grafico.js";
import schemaCreate from "../schemas/create.js";
import schemaUpdate from "../schemas/update.js";
import validator from "../middlewares/validator.js";
import getProjectSummary from '../controllers/summary.js';


const routerProjects = Router();

routerProjects.get("/all", readAll);
routerProjects.post("/create", validator(schemaCreate), createOne);
routerProjects.put("/update/:id", validator(schemaUpdate), updateOne);
routerProjects.delete("/deleteParam/:id", DeleteOneParam);
routerProjects.delete("/deleteBody", DeleteOneBody);
routerProjects.get("/graphics", getProjectStats);
routerProjects.get('/summary', getProjectSummary);


export default routerProjects;
