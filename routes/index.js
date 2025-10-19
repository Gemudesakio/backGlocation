import { Router } from "express"
import routerProjects from "./projects.js"

const routerIndex = Router()
routerIndex.use('/projects', routerProjects)
export default routerIndex