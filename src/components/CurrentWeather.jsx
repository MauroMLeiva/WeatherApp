export const CurrentWeather = () => {
    return (
        <div className='currentWeather container text-center'>
            <div className='row'>
                <div className='col'>
                    <p className='title'>Córdoba, Ar</p>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col'>
                    <img
                        alt='weather icon'
                        className='weather-icon'
                        src='01d.png'
                    />
                </div>
                <div className='col'>
                    <p className='data-1'>26°C</p>
                    <p className='data-2'>Cloudy</p>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='subtitle'>Max / Min</p>
                    <p className='data-3'>30 / 24</p>
                </div>

                <div className='col'>
                    <p className='subtitle'>Feels like</p>
                    <p className='data-3'>29°C</p>
                </div>

                <div className='col'>
                    <p className='subtitle'>Humidity</p>
                    <p className='data-3'>96%</p>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='subtitle'>Pressure</p>
                    <p className='data-3'>1023</p>
                </div>

                <div className='col'>
                    <p className='subtitle'>Wind</p>
                    <p className='data-3'>20 mts/sec 20°</p>
                </div>

                <div className='col'>
                    <p className='subtitle'>Visibility</p>
                    <p className='data-3'>5 km</p>
                </div>
            </div>
        </div>
    );
};
