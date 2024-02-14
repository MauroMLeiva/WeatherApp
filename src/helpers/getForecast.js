import { FORECAST_URL } from '../api/Weather';

export const getForecast = async (location) => {
    const [latitude, longitude] = location.value.split(' ');

    try {
        const forecastRes = await fetch(
            `${FORECAST_URL}&latitude=${latitude}&longitude=${longitude}`
        );
        const forecastResult = await forecastRes.json();

        return forecastResult;
    } catch (error) {
        console.log(error);
    }
};
