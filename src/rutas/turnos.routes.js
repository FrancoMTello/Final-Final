import { getTurno, getTurnos, deleteTurno, updateTurno, createTurno } from "../controladores/turno.controller.js";
import { Router } from "express"
import {validateSchema} from "../middlewares/validacion.js"
import {createTurnoSchema} from "../schemas/turno.schema.js"


const router = Router()

router.get("/turnos", getTurnos)
router.get("/turnos/:id", getTurno)
router.post("/turnos",validateSchema(createTurnoSchema), createTurno)
router.put("/turnos/:id", updateTurno)
router.delete("/turnos/:id", deleteTurno)

export default router