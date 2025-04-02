import { Route, Routes } from "react-router"
import Home from '../app/home/Home'  
import Pokedex from '../app/pokedex/Pokedex'
import Protected from "./Protected"
import MainLayout from "../layout/MainLayout"

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path='/pokedex' element={<Protected><MainLayout/></Protected>}>
        <Route index element={<Pokedex/>} />
        <Route path = ':name' element = {<h2>Details</h2>} />
      </Route>
      <Route path= '*' element={<h2>404 Not Found</h2>}/>
    </Routes>
    )
}

export default App
