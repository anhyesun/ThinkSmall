import React from 'react';
import Tags from './Tags';
import Search from './Search';

const List = ({ businesses, volunteers }) => (
    <>
        {businesses && 'businesses'}
        {volunteers && 'volunteers'}
        <Search />
        <Tags />
    </>
);

export default List;
