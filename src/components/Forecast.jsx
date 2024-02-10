import { ForecastItem } from './ForecastItem';

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const Forecast = () => {
    return (
        <div className='forecast'>
            <div className='accordion' id='accordionExample'>
                {data.slice(0, 7).map((item, index) => (
                    <ForecastItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
};
