import { FavoriteItem } from './FavoriteItem';

export const Favorites = ({ favs, setFavs }) => {
    return (
        <>
            {favs.length > 0 ? (
                <div className='container'>
                    {favs.map((fav) => (
                        <FavoriteItem
                            key={fav}
                            coords={fav}
                            setFavs={setFavs}
                        />
                    ))}
                </div>
            ) : (
                <div className='container favorites-empty'>
                    <p className='favorites-empty-text'>
                        Your favorite locations will appear here
                    </p>
                </div>
            )}
        </>
    );
};
