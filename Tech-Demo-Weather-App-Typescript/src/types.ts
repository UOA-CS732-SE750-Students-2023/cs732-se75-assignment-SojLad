// Types can be inferred here in a separate file. They can be reused in other
// parts of the code as this reduces code duplication.

export type optionType = {
    name: string;
    lat: number;
    lon: number;
};

export type forecastType = {
    name: string;
    country: string;
    list: [
        {
            dt: number;
            main: {
                temp: number;
                temp_max: number;
                temp_min: number;
            };
            weather: [
                {
                    icon: string;
                    description: string;
                }
            ];
        }
    ];
    timezone: number;
};
