
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

    const crearTurno= async (turno)=>{
        const res= await TurnoRequest(turno) 
        console.log(res)
    }
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






