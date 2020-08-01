import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem } from '@material-ui/lab'
import {
    GridList, GridListTile, useMediaQuery, useTheme,
} from '@material-ui/core'
import Tags from '../Tags/Tags'
import Search from '../Search'
import Switch from '../Switch'
import Maps from '../Maps'
import BusinessCard from './components/BusinessCard'
import { LoadingIndicator } from '../Form/components'
import { setKeyword, setFilters, getBusinesses } from '../../actions'
import classes from '../../modules/list.module.css'
import { defaultNeeds } from '../../constant'

const BusinessesList = ({
    loading, businesses, setKeyword, setFilters, getBusinesses, switchState,
}) => {
    const [currentPage, setPage] = useState(1)
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down(600))
    const md = useMediaQuery(theme.breakpoints.down(900))
    const cols = sm ? 1 : (md ? 2 : 3)
    const handleChange = (_, currentPage) => setPage(currentPage)

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
                            <div style={{ display: 'flex' }}>
                                <Search />
                                <Switch />
                            </div>
                            <Tags tags={defaultNeeds} canSelect />
                        </div>
                        {switchState
                            ? <Maps />
                            : (
                                <div className={classes.container}>
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
                                    <GridList cellHeight="auto" cols={cols}>
                                        {businesses
                                            .slice((currentPage - 1) * 6, currentPage * 6)
                                            .map((props, i) => (
                                                <GridListTile key={i} cols={1}>
                                                    <BusinessCard {...props} />
                                                </GridListTile>
                                            ))}
                                    </GridList>
                                </div>
                            )}
                    </div>
                )}
        </>
    )
}

const mapStateToProps = ({
    businesses, filters, keyword, switchState,
}) => ({
    switchState,
    loading: businesses.loading,
    businesses: businesses.data
        .filter(({ storeName }) => storeName.includes(keyword))
        .filter(({ tags }) => !filters.length
            || filters.every(tag => tags.some(({ label }) => label === tag))),
})
const mapDispatchToProps = { setKeyword, setFilters, getBusinesses }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesList)
