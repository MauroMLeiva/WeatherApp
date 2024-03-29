import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEOoptions, GEOurl } from '../api/GeoDBCities';

export const SearchBar = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const handleChange = (inputData) => {
        setSearch(inputData);
        onSearchChange(inputData);
    };

    const loadOptions = async (input) => {
        try {
            const response = await fetch(
                `${GEOurl}?namePrefix=${input}&minPopulation=5000&sort=-population`,
                GEOoptions
            );
            const result = await response.json();
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.country}`,
                    };
                }),
            };
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='searchbar'>
            <AsyncPaginate
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary25: '#a7a7a7',
                        primary: '#878787',
                    },
                })}
                placeholder='Enter city name'
                debounceTimeout={800}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};
