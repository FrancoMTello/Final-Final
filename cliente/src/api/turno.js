import axios from "./axios";


export const TurnoRequest = async (turno) => axios.post("/turnos", turno);

