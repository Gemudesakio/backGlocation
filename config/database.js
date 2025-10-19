import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        logging: false, // Desactivar logs de SQL en consola
    }
)

export const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Conexión a PostgreSQL establecida correctamente");
    }catch(error){
        console.error("Error al conectar a la base de datos:", error);
    }
}

//hacemos la conexion 
connectDB()