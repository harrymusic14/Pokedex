import { Route, Routes } from "react-router"
import Home from '../app/Home'  

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home />} />
      
      <Route path='/pokedex'>
        <Route index element={<h2>Pokedex</h2>} />
        <Route path = ':name' element = {<h2>Details</h2>} />
      </Route>
      
      <Route path= '*' element={<h2>404 Not Found</h2>}/>
    </Routes>
  )
}

export default App
