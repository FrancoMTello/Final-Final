
import { createContext, useContext, useState } from "react";
import '../api/turno'
import { TurnoRequest } from "../api/turno";

const TurnoContext = createContext();

export const useTurno = () => {
    const context = useContext(TurnoContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
};


export function TurnoProvider({children}){

    const [Turno, setTurno]= useState([])

    const crearTurno = async (turno) => {
        try {
            const res = await TurnoRequest(turno);
            console.log(res.data);
        } catch (error) {
            console.log("no funciona");
        }
    };
    return (
        <TurnoContext.Provider
            value={{Turno,
                crearTurno
        }}
        >
        {children}
        </TurnoContext.Provider>
    );
}






