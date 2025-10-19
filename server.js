// server.js
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"

import {connectDB, sequelize} from "./config/database.js";
// Cargar variables de entorno
dotenv.config();

const server = express()
const PORT = process.env.PORT || 8080
const ready = ()=>  console.log(`Servidor corriendo en http://localhost:${PORT}`)

//configuracion global 
server.use(express.json()); // Permite leer JSON del body
server.use(cors({ origin: process.env.CLIENT_URL || "*" }))
server.use(morgan("dev")); // Logs HTTP en consola

// Iniciar el servidor
server.listen(PORT,ready);
