import { useState } from 'react';
import { CurrentWeather, Forecast, SearchBar } from './components';
import { getCurrent, getForecast } from './helpers';

export const WeatherApp = () => {
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSearchChange = async (location) => {
        try {
            const currentWeatherResult = await getCurrent(location);
            setCurrent({ city: location.label, ...currentWeatherResult });

            const forecastResult = await getForecast(location);
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
                        <div className='col-12 col-md-5'>
                            <CurrentWeather data={current} />
                        </div>
                        <div className='col-12 col-md-7'>
                            <Forecast data={forecast} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
