

function Login(){


    return(
        <div className='flex h-screen items-center justify-center'>
        <div className=' bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <form>
                <input type="text" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Nombre de usuario"/>


                <input type="email" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="email"/> 



                <input type="password" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="contraseña"/> 

                <button type="submit">entrar</button>
            </form>
        </div>
        </div>
    )
}
export default Login