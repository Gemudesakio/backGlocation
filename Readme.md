🧩 BACKEND
API REST — Gestión de Proyectos

Stack: Node.js · Express · PostgreSQL · Prisma ORM · Joi · Swagger (OpenAPI 3.0)

Descripción general

API REST para la gestión de proyectos, desarrollada con Node.js y Express bajo arquitectura MVC modular.
Utiliza Prisma ORM para conectar con PostgreSQL, Joi para validar datos y Swagger UI para documentar los endpoints.
Incluye un flujo CRUD completo y manejo estructurado de errores.

⚙️ Instalación y ejecución
1. Clonar el repositorio
git clone https://github.com/Gemudesakio/backGlocation.git
cd backGlocation/backEnd

2. Instalar dependencias
npm install

3. Configurar variables de entorno

Crear un archivo .env en la raíz del backend:

PORT=8080
CLIENT_URL=http://localhost:5173
DATABASE_URL="postgresql://postgres:tu_password@localhost:5432/glocation_db?schema=public"
GEMINI_API_KEY=API KEY QUE GENERES

Asegúrate de que PostgreSQL esté corriendo y la base de datos glocation_db exista.

4. Configurar Prisma

Inicializa Prisma si no existe la carpeta prisma/:

npx prisma init


Modelo definido en prisma/schema.prisma:

model Proyecto {
  id          Int      @id @default(autoincrement())
  nombre      String
  descripcion String?
  estado      Boolean  @default(false)
  fechaInicio DateTime @default(now())
  fechaFin    DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}


Aplica migraciones y genera cliente:

npx prisma migrate dev --name init_proyectos
npx prisma generate

5. Ejecutar el servidor
npm run dev


Servidor disponible en:
http://localhost:8080

Documentación Swagger:
http://localhost:8080/api-docs

🧠 Decisiones técnicas

Prisma ORM: facilita las migraciones y abstrae consultas SQL.

Joi: middleware de validación para requests (validator(schema)).

Swagger UI: documentación automática en /api-docs.

Estructura modular (MVC): rutas, controladores, middlewares y esquemas separados.

Manejo de errores centralizado (error_handler.js y not_found_handler.js).

🔗 Endpoints principales

Base URL: http://localhost:8080/api/projects

Método	Endpoint	Descripción
GET	/all	Obtiene todos los proyectos
POST	/create	Crea un nuevo proyecto
PUT	/update/:id	Actualiza un proyecto existente
DELETE	/deleteParam/:id	Elimina un proyecto por parámetro
DELETE	/deleteBody	Elimina un proyecto enviando el ID en el body
Ejemplo: POST /api/projects/create

Request

{
  "nombre": "Sistema de reservas",
  "descripcion": "Aplicación web para agendar citas",
  "estado": true,
  "fechaInicio": "2025-10-22",
  "fechaFin": "2025-12-31"
}


Response

{
  "success": true,
  "message": "Proyecto creado exitosamente",
  "response": {
    "id": 1,
    "nombre": "Sistema de reservas",
    "descripcion": "Aplicación web para agendar citas",
    "estado": true,
    "fechaInicio": "2025-10-22T00:00:00.000Z",
    "fechaFin": "2025-12-31T00:00:00.000Z"
  }
}


Error de validación (Joi):

{
  "success": false,
  "message": ["El nombre del proyecto es obligatorio."]
}

Autor

Luis Eduardo Rivera Martos
Desarrollador Full-Stack
Universidad del Cauca — Popayán, Colombia
