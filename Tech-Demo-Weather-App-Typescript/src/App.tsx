// import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import React, { ChangeEvent, useState, useEffect } from "react";
// import { optionType } from "./types";
import useForecast from "./useForecast";
import Forecast from "./Forecast";

const App = (): JSX.Element => {
    const {
        userSearch,
        options,
        forecast,
        onInputChange,
        onOptionChosen,
        onSearch,
    } = useForecast();

    return (
        <div className="flex justify-center items-center bg-gradient-to-bl from-red-500 to-blue-800 h-[100vh] w-full">
            {forecast ? (
                <Forecast data={forecast}/>
            ) : (
                <Home
                    userSearch={userSearch}
                    options={options}
                    onInputChange={onInputChange}
                    onOptionChosen={onOptionChosen}
                    onSearch={onSearch}
                />
            )}
        </div>
    );
};

export default App;
