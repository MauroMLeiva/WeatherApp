import { CurrentWeather, Forecast, SearchBar } from './components';

export const WeatherApp = () => {
    const handleSearchChange = (inputData) => {
        console.log(inputData);
    };

    return (
        <>
            <div className='container'>
                <SearchBar onSearchChange={handleSearchChange} />

                <div className='row'>
                    <div className='col-12 col-lg-5'>
                        <CurrentWeather />
                    </div>
                    <div className='col-12 col-lg-7'>
                        <Forecast />
                    </div>
                </div>
            </div>
        </>
    );
};
