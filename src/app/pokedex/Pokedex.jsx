import { useName } from "../../contexts/nameContext"

function Pokedex() {
    const [state] = useName()
    return (
        <div>
            <h2>Bienvenido {state.name}, aquí podras encontrar tu pokemón favorito</h2>
        </div>
    )
}

export default Pokedex