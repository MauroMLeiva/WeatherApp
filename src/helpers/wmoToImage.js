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
