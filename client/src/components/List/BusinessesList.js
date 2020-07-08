import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem } from '@material-ui/lab'
import Tags from '../Tags/Tags'
import Search from '../Search'
import BusinessCard from './components/BusinessCard'
import { LoadingIndicator } from '../Form/components'
import { setKeyword, setFilters, getBusinesses } from '../../actions'
import classes from '../../modules/list.module.css'
import { defaultNeeds } from '../../constant'

const BusinessesList = ({
    loading, businesses, setKeyword, setFilters, getBusinesses,
}) => {
    const [currentPage, setPage] = useState(1)
    const handleChange = (_, currentPage) => {
        setPage(currentPage)
    }
    useEffect(() => {
        async function loadBusinesses() {
            await getBusinesses()
        }
        loadBusinesses()
        setKeyword('')
        setFilters([])
    }, [])

    return (
        <>
            {loading
                ? <LoadingIndicator />
                : (
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
                            {businesses
                                .slice((currentPage - 1) * 6, currentPage * 6)
                                .map(({ _id, ...props }) => (
                                    <BusinessCard key={_id} id={_id} {...props} />
                                ))}
                        </div>
                    </div>
                )}
        </>
    )
}

const mapStateToProps = ({ businesses, filters, keyword }) => ({
    loading: businesses.loading,
    businesses: businesses.data
        .filter(({ storeName }) => storeName.includes(keyword))
        .filter(({ tags }) => !filters.length
            || filters.every(tag => tags.some(({ label }) => label === tag))),
})
const mapDispatchToProps = { setKeyword, setFilters, getBusinesses }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesList)
