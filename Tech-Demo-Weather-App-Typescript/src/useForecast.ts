import { useState, useEffect, ChangeEvent } from "react";
import { optionType } from "./types";

const useForecast = () => {
    
    // The types for each React hook are inferred here. The type between each <> denotes
    // that the state should be accepting values in that type only.
    const apiKey: string = `7c5280fb7687def18b74ecd6decf5f1e`;
    const [userSearch, setUserSearch] = useState<string>("");
    const [chosenCity, setChosenCity] = useState<optionType>();
    const [options, setOptions] = useState<[]>([]);
    const [forecast, setForecast] = useState<null>();

    const getSearchOptions = (userSearchValue: string) => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${userSearchValue}&limit=5&appid=${apiKey}`
        )
            .then((res) => res.json())
            .then((data) => setOptions(data));
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setUserSearch(searchValue);

        if (searchValue === "") return;
        getSearchOptions(searchValue);
    };

    const onOptionChosen = (option: optionType) => {
        setChosenCity(option);
    };

    const getForecast = (chosenCity: optionType) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${chosenCity.lat}&lon=${chosenCity.lon}&units=metric&appid=${apiKey}`
        )
            .then((res) => res.json())
            .then((data) => {
                const forecastData = {
                    ...data.city,
                    list: data.list.slice(0, 12),
                };

                setForecast(forecastData);
            });
    };

    const onSearch = () => {
        if (!chosenCity) return;

        getForecast(chosenCity);
    };

    useEffect(() => {
        if (chosenCity) {
            setUserSearch(chosenCity.name);
            setOptions([]);
        }
    }, [chosenCity]);

    return {
        userSearch,
        options,
        forecast,
        onInputChange,
        onOptionChosen,
        onSearch,
    };
};

export default useForecast;
