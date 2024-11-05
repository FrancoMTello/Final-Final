import Usuario from "../modelos/usuario.model.js";
import bcrypt from "bcryptjs";
import { crearTokenAcesso } from "../libs/jwt.js";

export const registrar = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      usuario,
      password: passwordHash,
    });

    const usuarioGuardado = await nuevoUsuario.save();
    const token = await crearTokenAcesso({
      id: usuarioGuardado._id,
    });
    res.cookie("token", token); // estableces en una cookie la respuesta
    res.json({
      message: "Usuario creado con éxito",
    });
    res.json({
      id: usuarioGuardado.id,
      usuario: usuarioGuardado.usuario,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};


export const login = async (req, res) => {
  const { usuario, password } = req.body;

  try {

    const usuarioEncontrado = await Usuario.findOne({usuario})

    if (!usuarioEncontrado) return res.status(400).json({
      message: "Usuario no encontrado"
    })

    const isMatch = await bcrypt.compare(password, usuarioEncontrado.password); //Compara la contraseña con la de la bd
    if (!isMatch) return res.status(400).json({
      message: "Contraseña incorrecta"
    })

    const token = await crearTokenAcesso({
      id: usuarioEncontrado.id,
    });
    res.cookie("token", token); // estableces en una cookie la respuesta
    res.json({
      id: usuarioEncontrado.id,
      usuario: usuarioEncontrado.usuario,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

export const logOut = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const usuarioEncontrado = await Usuario.findById(req.user.id)

  if(!usuarioEncontrado) return res.status(400).json({
    message: "Usuario no encontrado"
  })
  return res.json({
    id: usuarioEncontrado.id,
    usuario: usuarioEncontrado.usuario,
  })



}