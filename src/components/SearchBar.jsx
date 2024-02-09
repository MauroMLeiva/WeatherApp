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
                `${GEOurl}?namePrefix=${input}&minPopulation=5000`,
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
                placeholder='Enter city name'
                debounceTimeout={800}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};
