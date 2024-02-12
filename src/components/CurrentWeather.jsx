export const CurrentWeather = ({ data }) => {
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

                <div className='col-1'></div>

                <div className='col-5 align-self-start p-3'>
                    <p className='subtitle'>Feels like</p>
                    <p className='subtitle'>Humidity</p>
                    <p className='subtitle'>Pressure</p>
                    <p className='subtitle'>Wind</p>
                    <p className='subtitle'>Visibility</p>
                </div>

                <div className='col-5 align-self-end p-3'>
                    <p className='data-3'>{data.main.humidity} %</p>
                    <p className='data-3'>{data.main.feels_like.toFixed(1)}°</p>
                    <p className='data-3'>{data.main.pressure} hPa</p>
                    <p className='data-3'>{data.wind.speed} mts/s</p>
                    <p className='data-3'>{data.visibility} mts</p>
                </div>

                <div className='col-1'></div>
            </div>
        </div>
    );
};
