import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    usuario: {type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {type: String,
        required: true
    }
})

export default mongoose.model("Usuario", usuarioSchema)