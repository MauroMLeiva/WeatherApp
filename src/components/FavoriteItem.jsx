import { useEffect, useState } from 'react';
import { getCurrent } from '../helpers';

export const FavoriteItem = ({ coords, setFavs }) => {
    const [lat, lon] = coords.split(' ');
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
        <div className='row container favorite-item'>
            <div className='col-auto favorite-item-btn'>
                <button
                    onClick={handleRemoveFavorite}
                    type='button'
                    className='btn btn-outline-dark btn-lg'
                    title='Favorite'
                >
                    <i className='bi-star-fill'></i>
                </button>
            </div>
            <div className='col center'>
                <span className='title'>{data?.name}</span>
                <img alt='weather icon' src={`${data?.weather[0].icon}.png`} />
                <span className='data-2'>{data?.main.temp.toFixed(1)}°</span>
            </div>
        </div>
    );
};
