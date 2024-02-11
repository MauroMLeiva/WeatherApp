import { CurrentWeather, Forecast, SearchBar } from './components';
import { CURRENT_WEATHER_URL, FORECAST_URL } from './api/OpenWeatherMap';
import { useState } from 'react';

export const WeatherApp = () => {
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSearchChange = async (location) => {
        const [latitude, longitude] = location.value.split(' ');
        const api_key = import.meta.env.VITE_WEATHER_API_KEY;

        try {
            const currentWeatherRes = await fetch(
                `${CURRENT_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
            );
            const currentWeatherResult = await currentWeatherRes.json();
            setCurrent({ city: location.label, ...currentWeatherResult });

            const forecastRes = await fetch(
                `${FORECAST_URL}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
            );
            const forecastResult = await forecastRes.json();
            setForecast({ city: location.label, forecastResult });

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='container'>
                <SearchBar onSearchChange={handleSearchChange} />

                {!loading && (
                    <div className='row'>
                        <div className='col-12 col-lg-5'>
                            <CurrentWeather data={current} />
                        </div>
                        <div className='col-12 col-lg-7'>
                            <Forecast />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
