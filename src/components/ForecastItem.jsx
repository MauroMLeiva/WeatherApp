import { wmoToImage, wmoToText } from '../helpers/wmoToData';

export const ForecastItem = ({ data, date }) => {
    const day = new Date(data.time[date]);
    const weekday = day.getDay();
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button d-flex justify-content-space-between align-items-center collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse${data.time[date]}`}
                    aria-expanded='false'
                    aria-controls={`collapse${data.time[date]}`}
                >
                    <div className='forecast-item'>
                        <span>{weekdays[weekday]}</span>
                        <span>
                            <img
                                alt='weather icon'
                                className='weather-icon-forecast'
                                src={wmoToImage(data.weather_code[date])}
                            />
                            {data.temperature_2m_max[date]}°/
                            {data.temperature_2m_min[date]}°
                        </span>
                    </div>
                </button>
            </h2>
            <div
                id={`collapse${data.time[date]}`}
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
            >
                <div className='accordion-body'>
                    <div className='row'>
                        <div className='col-5 forecast-item-content-l'>
                            <p>{data.time[date]}</p>
                            <p>
                                Precip.{' '}
                                {data.precipitation_probability_max[date]}%
                            </p>
                        </div>
                        <div className='col-7 forecast-item-content-r'>
                            <p>{wmoToText(data.weather_code[date])}</p>
                            <p>UV index {data.uv_index_max[date]}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
