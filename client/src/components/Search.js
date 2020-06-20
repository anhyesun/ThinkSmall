import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import classes from '../modules/search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        // TODO: implement searching functionality
        setSearch('');
    };

    return (
        <SearchBar
            value={search}
            className={classes.search}
            onChange={setSearch}
            onRequestSearch={handleSearch}
        />
    );
};

export default Search;
