import { ForecastItem } from './ForecastItem';

export const Forecast = ({ data }) => {
    const days = [0, 1, 2, 3, 4, 5, 6];

    return (
        <div className='forecast'>
            <div className='accordion' id='accordionExample'>
                {days.map((day) => (
                    <ForecastItem
                        key={day}
                        data={data.forecastResult.daily}
                        date={day}
                    />
                ))}
            </div>
        </div>
    );
};
