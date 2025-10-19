// server.js
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import routerIndex from "./routes/index.js";
import not_fount_handler from "./middlewares/not_found_handler.js"; 
import error_handler from "./middlewares/error_handler.js";

// Cargar variables de entorno
dotenv.config();

const server = express()
const PORT = process.env.PORT || 8080
const ready = ()=>  console.log(`Servidor corriendo en http://localhost:${PORT}`)

//configuracion global 
server.use(express.json()); // Permite leer JSON del body
server.use(cors({ origin: process.env.CLIENT_URL || "*" }))
server.use(morgan("dev")); // Logs HTTP en consola
server.use('/api', routerIndex); // Rutas principales
server.use(not_fount_handler); // Manejador de rutas no encontradas
server.use(error_handler); // Manejador de errores


// Iniciar el servidor
server.listen(PORT,ready);
