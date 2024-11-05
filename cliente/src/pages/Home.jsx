import { useForm } from "react-hook-form"
import {useTurno} from '../context/TurnoContext.jsx'


function Home(){
    const {register,handleSubmit}= useForm()
    const {crearTurno} = useTurno()

    const onSubmit = handleSubmit((data)=>{
        crearTurno(data)
    })
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                type="texto" placeholder='Nombre'{...register("name")} autoFocus/>
                <input
                type="texto" placeholder='Apellido'{...register("surname")}autoFocus/>
                <input
                type="texto" placeholder='Medico'{...register("surname")}autoFocus/>
                <input></input>
                <input
                type="Date" placeholder='fecha'{...register("surname")}autoFocus/>
                <input
                type="dateTime" placeholder='hora'{...register("surname")}autoFocus/>
                <button>Guardar</button>
            </form>
        </div>  
    )
}
export default Home


