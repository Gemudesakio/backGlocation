// docs/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

// Necesario para obtener rutas absolutas con ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Glocation — Gestión de Proyectos",
      version: "1.0.0",
      description:
        "API REST para la gestión de proyectos, construida con Express, Prisma, Joi y PostgreSQL.",
      contact: {
        name: "Luis Eduardo Rivera Martos",
        email: "luisrivera5215@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8080}`,
        description: "Servidor de desarrollo",
      },
    ],
  },
  // 👇 Usa ruta absoluta, garantizada con ESM
  apis: [path.resolve(__dirname, "../routes/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (server) => {
  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
server.get("/api-docs/ping", (_, res) => res.send("Swagger está montado correctamente ✅"));

  console.log(
    `📘 Documentación Swagger disponible en: http://localhost:${process.env.PORT || 8080}/api-docs`
  );
};
