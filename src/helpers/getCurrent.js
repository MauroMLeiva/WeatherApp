import { CURRENT_WEATHER_URL } from '../api/Weather';

export const getCurrent = async (location) => {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;

    const [latitude, longitude] = location.value.split(' ');

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
