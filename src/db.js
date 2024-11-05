import mongoose from "mongoose";

export const conectarBD = async () => {
  try {
    await mongoose.connect("mongodb+srv://ignacioM:qdd9KS6bX1KxR0uN@pensar-saludbd.w4evv.mongodb.net/?retryWrites=true&w=majority&appName=Pensar-saludBD"
  );
    console.log("Conectado a la BD")
  } catch (error) {
    console.log(error);
  }
};
