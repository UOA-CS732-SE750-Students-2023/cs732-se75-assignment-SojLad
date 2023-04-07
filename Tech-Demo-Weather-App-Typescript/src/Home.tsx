import { useState } from "react";


const Home = (): JSX.Element => {

    const [userSearch, setUserSearch] = useState('');

    const onInputChange = (event: string) => {
        console.log(event.target.value)
    }
    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    //7c5280fb7687def18b74ecd6decf5f1e
  //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    return(
    
    <div className="flex justify-center items-center bg-gradient-to-bl from-red-500 to-blue-800 h-[100vh] w-full">
    <div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center 
                    justify-center md:px-10 lg:p-24 h-full lg:h-[5oopx] bg-white 
                    bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
        <div>
            <h1 className="text-4x1 font-thin text-4xl">
                Weather Tech Demo
            </h1>

            <p>Enter a Location Below</p>

            <input
                type="text"
                value={userSearch}
                className="rounded px-3 py-3"
                onChange={onInputChange}
            />

            <br />

            <button className="px-5 py-1 border-2 border-red-100 rounded cursor-pointer">Search</button>
        </div>
    </div>
</div>
        
    )
}

export default Home