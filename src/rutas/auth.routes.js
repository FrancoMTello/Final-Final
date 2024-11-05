import { Router } from "express";
import { login, logOut, registrar, profile } from "../controladores/auth.controller.js";
import { authRequired } from "../middlewares/validacionToken.js";
const router = Router()

router.post("/registrar", registrar)
router.post("/login", login)
router.post("/logout", logOut)
router.get("/profile", authRequired, profile)


export default router