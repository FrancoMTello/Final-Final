import axios from "./axios";


const API ='http://localhost:3000/api'


export const TurnoRequest = async (turno) => axios.post("/turnos", turno);
