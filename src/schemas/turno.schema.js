import {z} from "zod"

export const createTurnoSchema = z.object({
    nombre: z.string({
        required_error: "Es requerido un nombre"
    }),
    apellido: z.string({
        required_error: "Es requerido un apellido"
    }),
    telefono: z.number({
        required_error: "Es requerido un telefono"
    }),
    doctor: z.string({
        required_error: "Es requerido un doctor"
    }),
    fecha: z.date({
        required_error: "Es requerido una fecha"
    }),
    hora: z.date({
        required_error: "Es requerido un horario"
    }),
})