export const CurrentWeather = () => {
    return (
        <div className='currentWeather container text-center'>
            <div className='row gy-2 align-items-center'>
                <div className='col-12'>
                    <span className='title'>Córdoba, Ar</span>
                </div>

                <div className='col-6'>
                    <img
                        alt='weather icon'
                        className='weather-icon'
                        src='01d.png'
                    />
                    <span className='data-2'>Cloudy</span>
                </div>
                <div className='col-6 p-3'>
                    <p className='data-1'>26°C</p>
                    <span className='data-2'>19:50</span>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Max / Min</span>
                    <p className='data-3'>30 / 24</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Feels like</span>
                    <p className='data-3'>29°C</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Humidity</span>
                    <p className='data-3'>96%</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Pressure</span>
                    <p className='data-3'>1023</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Wind</span>
                    <p className='data-3'>20 mt/s</p>
                </div>

                <div className='col-4'>
                    <span className='subtitle'>Visibility</span>
                    <p className='data-3'>5 km</p>
                </div>
            </div>
        </div>
    );
};
