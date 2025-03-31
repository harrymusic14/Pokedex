function Home () {
    return (
        <div className="w-full h-dvh flex justify-center items-center">
            <div className="border border-red-400">
                <h1>POKEDEX</h1>
                <h2>¡Hola entrenador!</h2>
                <p>Para poder comenazar, dame un nombre</p>

                <div>
                    <input type="text" />
                    <button>Comenzar</button>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 bg-black w-full h-20 mt-auto">
                <div className="bg-red-600 w-full h-12"></div>
            </div>
        </div>  
    )
}
export default Home