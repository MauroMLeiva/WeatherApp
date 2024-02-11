export const CurrentWeather = ({ data }) => {
    console.log(data);
    return (
        <div className='currentWeather container text-center'>
            <div className='row gy-2 align-items-center'>
                <div className='col-12'>
                    <span className='title'>
                        {data.city.split(',').slice(0, 1)}
                    </span>
                </div>

                <div className='col-6'>
                    <img
                        alt='weather icon'
                        className='weather-icon'
                        src={`${data.weather[0].icon}.png`}
                    />
                </div>

                <div className='col-6'>
                    <p className='data-1'>{data.main.temp.toFixed(1)}°</p>
                </div>

                <div className='col-6'>
                    <span className='data-2'>{data.weather[0].main}</span>
                </div>

                <div className='col-6'>
                    <span className='data-2'>
                        {new Date(data.dt * 1000).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </span>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Feels like</span>
                    <p className='data-3'>{data.main.feels_like.toFixed(1)}°</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Humidity</span>
                    <p className='data-3'>{data.main.humidity} %</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Pressure</span>
                    <p className='data-3'>{data.main.pressure} hPa</p>
                </div>

                <div className='col-2'></div>

                <div className='col-4'>
                    <span className='subtitle'>Wind</span>
                    <p className='data-3'>{data.wind.speed} mts/s</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Visibility</span>
                    <p className='data-3'>{data.visibility} mts</p>
                </div>

                <div className='col-2'></div>
            </div>
        </div>
    );
};
