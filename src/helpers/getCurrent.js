import { CURRENT_WEATHER_URL } from '../api/Weather';

export const getCurrent = async (latitude, longitude) => {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;

    try {
        const currentWeatherRes = await fetch(
            `${CURRENT_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
        );
        const currentWeatherResult = await currentWeatherRes.json();

        return currentWeatherResult;
    } catch (error) {
        console.log(error);
    }
};
