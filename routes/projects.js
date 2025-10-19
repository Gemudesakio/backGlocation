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

import { Router } from "express";
import createOne from "../controllers/create.js";
import readAll from "../controllers/read.js";
import updateOne from "../controllers/update.js";
import { DeleteOneBody, DeleteOneParam } from "../controllers/delete.js";
import schemaCreate from "../schemas/create.js";
import schemaUpdate from "../schemas/update.js";
import validator from "../middlewares/validator.js";

const routerProjects = Router();

routerProjects.get("/all", readAll);
routerProjects.post("/create", validator(schemaCreate), createOne);
routerProjects.put("/update/:id", validator(schemaUpdate), updateOne);
routerProjects.delete("/deleteParam/:id", DeleteOneParam);
routerProjects.delete("/deleteBody", DeleteOneBody);

export default routerProjects;
