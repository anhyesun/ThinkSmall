import React from 'react';
import SearchBar from 'material-ui-search-bar';
import classes from '../modules/search.module.css';

const Search = () => (
    <SearchBar
        className={classes.search}
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
    />
);

export default Search;
