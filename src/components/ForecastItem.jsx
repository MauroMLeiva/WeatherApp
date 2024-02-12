export const ForecastItem = ({ data, date }) => {
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
                    <div className='temp2'>
                        <span className='temp'>{data.time[date].slice(5)}</span>
                        <img
                            alt='weather icon'
                            className='weather-icon-forecast'
                            src={`01d.png`}
                        />
                        <span className='temp'>
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
                    <strong>
                        This is the #{data.time[date]} item's accordion body.
                    </strong>
                </div>
            </div>
        </div>
    );
};
