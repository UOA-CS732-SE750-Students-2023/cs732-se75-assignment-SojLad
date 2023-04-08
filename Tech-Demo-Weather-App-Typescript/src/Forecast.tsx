import { forecastType } from "./types";

type Props = {
    data: forecastType;
};

const Forecast = ({ data }: Props): JSX.Element => {
    const todaysWeather = data.list[0];
    
    return (
        <div
            className="w-full md:max-w-[500px] py-4 md:py-4
        md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20
        backdrop-blur-ls rounded drop-shadow-lg"
        >
            <div className="mx-auto w-[300px]">
                <div className="text-center">
                    <h2 className="text-2xl font-black">
                        {data.name}, {data.country}
                    </h2>
                    <h2 className="text-3xl font-bold">
                        {todaysWeather.main.temp.toFixed(1)}
                        &deg;C
                    </h2>
                    <p className="text-lg">
                        {todaysWeather.weather[0].description.charAt(0).toUpperCase() + todaysWeather.weather[0].description.slice(1)}
                    </p>
                    <p className="text-lg">
                        H: {todaysWeather.main.temp_max.toFixed(1)}&deg;C
                        <br></br>
                        L: {todaysWeather.main.temp_min.toFixed(1)}&deg;C
                    </p>

                    <div className="flex overflow-x-scroll mt-4 pb-2 mb-5">
                        {data.list.map((item, index) => (
                            <div
                                className="inline-block text-center w-[50px] flex-shrink-0"
                                key={index}>
                                <p>
                                    {index === 0
                                        ? "Now"
                                        : new Date(item.dt * 1000).getHours()}
                                </p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                />
                                <p>{item.main.temp.toFixed(0)}&deg;C</p>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Forecast;
