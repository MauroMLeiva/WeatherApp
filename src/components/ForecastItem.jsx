export const ForecastItem = ({ data, date }) => {
    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse${data.time[date]}`}
                    aria-expanded='false'
                    aria-controls={`collapse${data.time[date]}`}
                >
                    <span className='temp'>{data.time[date]}</span>
                    <img
                        alt='weather icon'
                        className='weather-icon-forecast'
                        src={`01d.png`}
                    />
                    <span className='temp'>
                        {data.temperature_2m_max[date]}°C/
                        {data.temperature_2m_min[date]}°C
                    </span>
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
