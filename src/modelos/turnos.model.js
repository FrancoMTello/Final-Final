import mongoose from "mongoose";


const turnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido : {
        type: String,
        required: true,
    },
    telefono : {
        type: Number,
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date.now()
    },
    hora: {
        type: Date.now()
    }
})

export default mongoose.model("Turno", turnoSchema)