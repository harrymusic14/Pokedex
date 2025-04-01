function Home () {
    return (
        <div className="w-full h-dvh flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-4">POKEDEX</h1>
                <h2 className="text-xl font-semibold text-red-500 ">¡Hola entrenador!</h2>
                <p className="mb-4">Para poder comenazar, dame un nombre</p>

                <div>
                    <input 
                    type="text" 
                    className="bg-white shadow py-1.5 px-3 outline-0"
                    placeholder="tu nombre"
                    />
                    <button className="bg-red-500 text-white py-1.5 px-3 cursor-pointer hover:bg-red-600 transition-colors duration-300 ease-in-out">  
                        Comenzar
                    </button>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 bg-black w-full h-20 mt-auto">
                <div className="bg-red-600 w-full h-12"></div>
            </div>
        </div>  
    )
}
export default Home