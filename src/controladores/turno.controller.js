import Turno from "../modelos/turnos.model.js"

export const getTurnos = async (req, res) => {
    const turnos = await Turno.find()
    res.json(turnos)
} 
export const getTurno = async (req, res) => {
    const turno = await Turno.findById(req.params.id)
    if (!turno) return res.status(404).json({
        message: "Turno no encontrado"
    })
    res.json(turno)
} 


export const createTurno = async (req, res) => {
    const {nombre, apellido, telefono, email, especialidad, doctor } = req.body
    const nuevoTurno = new Turno({
        nombre, apellido, telefono, email, especialidad, doctor
    })
    const turnoGuardado = await nuevoTurno.save()
    res.json(turnoGuardado)

} 
export const updateTurno = async (req, res) => {
    const turno = await Turno.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!turno) return res.status(404).json({
        message: "Turno no encontrado"
    })
    res.json(turno)
} 


export const deleteTurno = async (req, res) => {
    const turno = await Turno.findByIdAndDelete(req.params.id)
    if (!turno) return res.status(404).json({
        message: "Turno no encontrado"
    })
    res.json(turno)
} 