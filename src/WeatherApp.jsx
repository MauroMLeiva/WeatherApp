import { CurrentWeather, SearchBar } from './components';

export const WeatherApp = () => {
    const handleSearchChange = (inputData) => {
        console.log(inputData);
    };

    return (
        <>
            <div className='container'>
                <SearchBar onSearchChange={handleSearchChange} />

                <CurrentWeather />
            </div>
        </>
    );
};
