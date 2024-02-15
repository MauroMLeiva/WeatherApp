import { useEffect, useState } from 'react';
import { getCurrent } from '../helpers';

export const FavoriteItem = ({ coords, setFavs }) => {
    const [lat, lon] = coords.split(' ').slice(0, 2);
    const cityName = coords.split(' ').slice(2).join(' ');

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCurrent(lat, lon);
            setData(data);
        };

        fetchData();
    }, []);

    const handleRemoveFavorite = () => {
        const fav = JSON.parse(localStorage.getItem('favorites'));
        const newFavs = fav.filter((city) => city != coords);
        localStorage.setItem('favorites', JSON.stringify(newFavs));
        setFavs(newFavs);
    };

    return (
        <div className='row favorite-item'>
            <div className='col-auto favorite-item-btn'>
                <button
                    onClick={handleRemoveFavorite}
                    type='button'
                    className='btn btn-dark btn-lg'
                    title='Remove from favorites'
                >
                    <i className='bi-star-fill'></i>
                </button>
            </div>

            <div className='col center'>
                <span className='fav-title'>{cityName}</span>
                <img alt='weather icon' src={`${data?.weather[0].icon}.png`} />
                <span className='fav-data'>{data?.main.temp.toFixed(1)}°</span>
            </div>
        </div>
    );
};
