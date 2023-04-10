import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import useForecast from "./useForecast";
import Forecast from "./Forecast";
import PageLayout from "./PageLayout";

const App = (): JSX.Element => {

    // Destructuring assignments to get values return from the useForecast hook and
    // making it available for the app
    const {
        userSearch,
        options,
        forecast,
        onInputChange,
        onOptionChosen,
        onSearch,
    } = useForecast();

    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route
                    path="home"
                    element={
                        <Home
                            userSearch={userSearch}
                            options={options}
                            onInputChange={onInputChange}
                            onOptionChosen={onOptionChosen}
                            onSearch={onSearch}
                        />
                    }
                />
                <Route
                    path="forecast"
                    element={
                        forecast ? (
                            <Forecast data={forecast} />
                        ) : (
                            <Home
                                userSearch={userSearch}
                                options={options}
                                onInputChange={onInputChange}
                                onOptionChosen={onOptionChosen}
                                onSearch={onSearch}
                            />
                        )
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;
