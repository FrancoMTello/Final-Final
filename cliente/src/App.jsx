import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registrar from "./pages/Registrar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { TurnoProvider } from "./context/TurnoContext"


function App(){
  return(
      <BrowserRouter>
        <TurnoProvider>
          <Routes>
            <Route path="/" element={<h1>Landing</h1>}/>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/register" element={<Registrar></Registrar>}/>
            <Route path="/home" element={<Home></Home>}/>
          </Routes>
        </TurnoProvider>
      </BrowserRouter>
  )
}


export default App


