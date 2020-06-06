import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Tags from './Tags/Tags';
import Search from './Search';
import BusinessCard from './BusinessCard';
import VolunteerCard from './VolunteerCard';
import classes from '../modules/list.module.css';

const List = ({ businesses, volunteers }) => {
    const SearchBar = () => (
        <div className={classes.searchBar}>
            <Search />
            <Tags />
        </div>
    );

    return (
        <div className={classes.root}>
            <SearchBar />
            <div className={classes.container}>
                {businesses && businesses.map(({ id, ...props }) => (
                    <BusinessCard key={id} {...props} />
                ))}
                {volunteers && volunteers.map(({ id, ...props }) => (
                    <VolunteerCard key={id} {...props} />
                ))}
            </div>
            <Pagination count={10} variant="outlined" color="primary" size="small" />
        </div>
    );
};

export default List;
