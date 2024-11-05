function Registrar(){

    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">

            <form>
                <input type="text" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Nombre de usuario"/>


                <input type="email"className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="email"/> 



                <input type="password"className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="contraseña"/> 


                <button type="submit">registrar</button>
            </form>
        </div>
    )
}
export default Registrar