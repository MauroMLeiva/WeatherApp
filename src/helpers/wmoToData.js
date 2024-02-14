export const wmoToImage = (wmoCode) => {
    switch (wmoCode) {
        case 0:
            return '01d.png';
        case 1:
            return '02d.png';
        case 2:
            return '03d.png';
        case 3:
            return '04d.png';
        case 45:
        case 48:
            return '50d.png';
        case 51:
        case 53:
        case 54:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return '10d.png';
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return '13d.png';
        case 80:
        case 81:
        case 82:
            return '09d.png';
        case 95:
        case 96:
        case 97:
            return '11d.png';

        default:
            break;
    }
};

export const wmoToText = (wmoCode) => {
    switch (wmoCode) {
        case 0:
            return 'Clear sky';
        case 1:
            return 'Mainly clear';
        case 2:
            return 'Partly cloudy';
        case 3:
            return 'Overcast';
        case 45:
            return 'Fog';
        case 48:
            return 'Depositing rime fog';
        case 51:
            return 'Light drizzle';
        case 53:
            return 'Moderate drizzle';
        case 55:
            return 'Dense drizzle';
        case 56:
            return 'Freezing light drizzle';
        case 57:
            return 'Freezing dense drizzle';
        case 61:
            return 'Slight rain';
        case 63:
            return 'Moderate rain';
        case 65:
            return 'Heavy rain';
        case 66:
            return 'Freezing light rain';
        case 67:
            return 'Freezing heavy rain';
        case 71:
            return 'Slight snow';
        case 73:
            return 'Moderate snow';
        case 75:
            return 'Heavy snow';
        case 77:
            return 'Snow grains';
        case 80:
            return 'Slight rain showers';
        case 81:
            return 'Moderate rain showers';
        case 82:
            return 'Violent rain showers';
        case 85:
            return 'Slight snow showers';
        case 86:
            return 'Heavy snow showers';
        case 95:
            return 'Thunderstorm';
        case 96:
            return 'Thunderstorm with slight hail';
        case 99:
            return 'Thunderstorm with heavy hail';

        default:
            break;
    }
};
