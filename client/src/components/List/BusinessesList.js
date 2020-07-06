import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem } from '@material-ui/lab'
import Tags from '../Tags/Tags'
import Search from '../Search'
import BusinessCard from './components/BusinessCard'
import { setKeyword, setFilters } from '../../actions'
import classes from '../../modules/list.module.css'
import { defaultNeeds } from '../../constant'

const BusinessesList = ({
    businesses, filters, keyword, setKeyword, setFilters,
}) => {
    const [currentPage, setPage] = useState(1)
    const handleChange = (_, currentPage) => {
        setPage(currentPage)
    }
    useEffect(() => {
        setKeyword('')
        setFilters([])
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.searchBar}>
                <Search />
                <Tags tags={defaultNeeds} canSelect />
            </div>
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
                    .filter(({ storeName }) => storeName.includes(keyword))
                    .filter(({ tags }) => !filters.length
                        || filters.every(tag => tags.some(({ label }) => label === tag)))
                    .slice((currentPage - 1) * 6, currentPage * 6)
                    .map(({ id, ...props }) => (
                        <BusinessCard key={id} id={id} {...props} />
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ businesses, filters, keyword }) => ({ businesses, filters, keyword })

export default connect(mapStateToProps, { setKeyword, setFilters })(BusinessesList)
