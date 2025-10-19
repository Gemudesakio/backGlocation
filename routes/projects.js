import { Router } from "express"
import createOne from "../controllers/create.js"
import readAll from "../controllers/read.js"
import updateOne from "../controllers/update.js"
import {DeleteOneBody, DeleteOneParam} from "../controllers/delete.js"
import schemaCreate from "../schemas/create.js"
import schemaUpdate from "../schemas/update.js"
import validator from "../middlewares/validator.js"

const routerProjects = Router()

routerProjects.get('/all', readAll);
routerProjects.post('/create',validator(schemaCreate), createOne)
routerProjects.put('/update/:id',validator(schemaUpdate), updateOne)
routerProjects.delete('/deleteParam/:id', DeleteOneParam)
routerProjects.delete('/deleteBody', DeleteOneBody)
export default routerProjects