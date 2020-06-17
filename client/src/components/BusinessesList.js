import React, { useState } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import Tags from './Tags/Tags';
import Search from './Search';
import BusinessCard from './BusinessCard';
import classes from '../modules/list.module.css';

const BusinessesList = ({ businesses }) => {
    const SearchBar = () => (
        <div className={classes.searchBar}>
            <Search />
            <Tags />
        </div>
    );
    const [currentPage, setPage] = useState(1);
    const handleChange = (event, currentPage) => {
        setPage(currentPage);
    };

    return (
        <div className={classes.root}>
            <SearchBar />
            <div className={classes.page}>
                <Pagination
                    onChange={handleChange}
                    page={currentPage}
                    count={Math.ceil(businesses.length / 6)}
                    renderItem={item => (
                        <PaginationItem {...item} />
                    )}
                />
            </div>

            <div className={classes.container}>
                {businesses && businesses
                    .slice((currentPage - 1) * 6, currentPage * 6)
                    .map(({ id, ...props }) => (
                        <BusinessCard key={id} {...props} />
                ))}
            </div>
        </div>
    );
};

export default BusinessesList;
