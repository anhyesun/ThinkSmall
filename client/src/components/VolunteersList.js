import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import Tags from './Tags/Tags';
import Search from './Search';
import VolunteerCard from './VolunteerCard';
import classes from '../modules/list.module.css';

const VolunteersList = ({ volunteers }) => {
    const SearchBar = () => (
        <div className={classes.searchBar}>
            <Search />
            <Tags />
        </div>
    );
    const [currentPage, setPage] = useState(1);
    const handleChange = (_, currentPage) => {
        setPage(currentPage);
    };

    return (
        <div className={classes.root}>
            <SearchBar />
            <div className={classes.page}>
                <Pagination
                    onChange={handleChange}
                    page={currentPage}
                    count={Math.ceil(volunteers.length / 6)}
                    renderItem={item => <PaginationItem {...item} />}
                />
            </div>
            <div className={classes.container}>
                {volunteers
                    && volunteers
                        .slice((currentPage - 1) * 6, currentPage * 6)
                        .map(({ id, ...props }) => <VolunteerCard key={id} {...props} />)}
            </div>
        </div>
    );
};

const mapStateToProps = ({ volunteers }) => ({ volunteers });

export default connect(mapStateToProps)(VolunteersList);
