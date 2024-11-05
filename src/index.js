import app from "./app.js";
import { conectarBD } from "./db.js";


conectarBD()
app.listen(3000)
console.log("Server on port: ", 3000)

