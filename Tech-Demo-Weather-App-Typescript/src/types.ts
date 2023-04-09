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
