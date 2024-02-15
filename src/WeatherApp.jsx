import { useState } from 'react';
import { CurrentWeather, Forecast, SearchBar, Favorites } from './components';
import { getCurrent, getForecast } from './helpers';

export const WeatherApp = () => {
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favs, setFavs] = useState(() =>
        JSON.parse(localStorage.getItem('favorites') || '[]')
    );

    const handleSearchChange = async (location) => {
        const [latitude, longitude] = location.value.split(' ');
        try {
            const currentWeatherResult = await getCurrent(latitude, longitude);
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
                            <CurrentWeather
                                data={current}
                                favs={favs}
                                setFavs={setFavs}
                            />
                        </div>
                        <div className='col-12 col-md-7'>
                            <Forecast data={forecast} />
                        </div>
                    </div>
                )}

                <Favorites favs={favs} setFavs={setFavs} />
            </div>
        </>
    );
};
