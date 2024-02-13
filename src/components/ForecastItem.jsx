import { wmoToImage } from '../helpers/wmoToImage';

export const ForecastItem = ({ data, date }) => {
    const day = new Date(data.time[date]);
    const weekday = day.getDay();
    const weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

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
                        <span>{data.time[date].slice(5)}</span>
                        <img
                            alt='weather icon'
                            className='weather-icon-forecast'
                            src={wmoToImage(data.weather_code[date])}
                        />
                        <span>
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
                    <div className='forecast-item-content'>
                        <span>{weekdays[weekday]}</span>
                        <span>
                            Precipitation prob.{' '}
                            {data.precipitation_probability_max[date]}%
                        </span>
                        <span>UV index {data.uv_index_max[date]}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
