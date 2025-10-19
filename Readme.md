API REST — Gestión de Proyectos

Stack: Node.js · Express · PostgreSQL · Prisma ORM · Joi · Swagger (OpenAPI 3.0)

Descripción general

Esta API REST proporciona un sistema completo para la gestión de proyectos, desarrollada con Node.js y Express siguiendo una arquitectura MVC modular.
Integra Prisma ORM para la persistencia de datos en PostgreSQL, validación de entrada mediante Joi, y documentación interactiva con Swagger UI.

El proyecto implementa un flujo CRUD completo (crear, leer, actualizar y eliminar proyectos), con manejo estructurado de errores, middlewares reutilizables y validación robusta del lado del servidor.

Tecnologías utilizadas
Tecnología	Descripción
Node.js (v20+)	Entorno de ejecución para JavaScript en el backend
Express.js	Framework minimalista para la creación de APIs REST
Prisma ORM	Mapeo objeto-relacional moderno y eficiente para PostgreSQL
PostgreSQL	Base de datos relacional robusta y escalable
Joi	Validación de datos en las solicitudes HTTP
Swagger (OpenAPI 3.0)	Generación automática de documentación de la API
Nodemon	Reinicio automático del servidor durante el desarrollo
Morgan	Middleware para logging de peticiones HTTP
dotenv	Gestión de variables de entorno
Estructura del proyecto
backEnd/
├── controllers/
│   ├── create.js
│   ├── read.js
│   ├── update.js
│   └── delete.js
│
├── middlewares/
│   ├── validator.js
│   └── error_handler.js   
│   └── not_found_handler.js
│
├── schemas/
│   ├── create.js
│   └── update.js
│
├── routes/
│   ├── index.js
│   └── projects.js
│
├── prisma/
│   └── schema.prisma
│
├── docs/
│   └── swagger.js
│
├── server.js
└── package.json

Instalación y configuración
1. Clonar el repositorio
git clone https://github.com/Gemudesakio/backGlocation.git

2. Instalar dependencias
npm install
Este comando instalará automáticamente todas las dependencias declaradas en el archivo package.json.

3. Configurar variables de entorno
Cree un archivo .env en la raíz del backend con el siguiente contenido (ajustando los valores según su entorno local):

PORT=8080
CLIENT_URL=http://localhost:5173 -> direccion permitira para fronted (cors)
DATABASE_URL="postgresql://postgres:tu_password@localhost:5432/glocation_db?schema=public"

Nota: asegúrese de que PostgreSQL esté instalado, ejecutándose y que la base de datos glocation_db exista.

4. Configurar Prisma ORM
Inicializar Prisma (si aún no existe la carpeta prisma/):

npx prisma init
Edite el archivo prisma/schema.prisma:

model Proyecto {
  id          Int       @id @default(autoincrement())
  nombre      String
  descripcion String?
  estado      Boolean   @default(false)
  fechaInicio DateTime  @default(now())
  fechaFin    DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}


Ejecute las migraciones y genere el cliente:

npx prisma migrate dev --name init_proyectos
npx prisma generate

5. Ejecutar el servidor
Modo desarrollo:
npm run dev

El servidor se iniciará en:
http://localhost:8080


Si la configuración es correcta, en consola verá:

✅ Servidor corriendo en http://localhost:8080
📘 Documentación disponible en http://localhost:8080/api-docs

Endpoints principales

Base URL: http://localhost:8080/api/projects

Método	Endpoint	Descripción
GET/all	Obtiene todos los proyectos
POST/create	Crea un nuevo proyecto
PUT	/update/:id	Actualiza un proyecto existente
DELETE/deleteParam/:id	Elimina un proyecto por parámetro
DELETE/deleteBody	Elimina un proyecto enviando el ID en el cuerpo
Ejemplo de solicitud POST /api/projects/create

Request Body

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

Validación de datos

La API implementa validación robusta con Joi, estructurada mediante un middleware genérico validator(schema) que recibe esquemas personalizados:
schemas/create.js: valida campos requeridos para creación.
schemas/update.js: valida campos opcionales, pero exige al menos uno (.min(1)).

Ejemplo de respuesta de error:
{
  "success": false,
  "message": ["El nombre del proyecto es obligatorio."]
}

Documentación interactiva (Swagger UI)

El proyecto incluye documentación automática generada mediante Swagger UI.
Una vez iniciado el servidor, puede acceder a:

http://localhost:8080/api-docs

Desde esta interfaz podrá:
Consultar la descripción de cada endpoint.
Visualizar esquemas de entrada y salida.

Luis Eduardo Rivera Martos
Desarrollador Full-Stack
Universidad del Cauca — Popayán, Colombia