import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem } from '@material-ui/lab'
import {
    GridList, GridListTile, useMediaQuery, useTheme,
} from '@material-ui/core'
import Tags from '../Tags/Tags'
import Search from '../Search'
import VolunteerCard from './components/VolunteerCard'
import { LoadingIndicator } from '../Form/components'
import { setKeyword, setFilters, getUsers } from '../../actions'
import { defaultSkills } from '../../constant'
import classes from '../../modules/list.module.css'

const VolunteersList = ({
    loading, volunteers, setKeyword, setFilters, getUsers,
}) => {
    const [currentPage, setPage] = useState(1)
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down(600))
    const md = useMediaQuery(theme.breakpoints.down(900))
    const cols = sm ? 1 : (md ? 2 : 3)
    const handleChange = (_, currentPage) => setPage(currentPage)

    useEffect(() => {
        async function loadUsers() {
            await getUsers()
        }
        loadUsers()
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
                            <Tags tags={defaultSkills} canSelect />
                        </div>
                        <div className={classes.container}>
                            <div className={classes.page}>
                                <Pagination
                                    onChange={handleChange}
                                    page={currentPage}
                                    count={Math.ceil(volunteers.length / 6)}
                                    renderItem={item => <PaginationItem {...item} />}
                                />
                            </div>
                            <GridList cellHeight="auto" cols={cols}>
                                {volunteers
                                    .slice((currentPage - 1) * 6, currentPage * 6)
                                    .map((props, i) => (
                                        <GridListTile key={i} cols={1}>
                                            <VolunteerCard {...props} />
                                        </GridListTile>
                                    ))}
                            </GridList>
                        </div>
                    </div>
                )}
        </>
    )
}

const mapStateToProps = ({ users, filters, keyword }) => ({
    loading: users.loading,
    volunteers: users.data
        .filter(({ description = '' }) => description.includes(keyword))
        .filter(({ tags }) => !filters.length
            || filters.every(tag => tags.some(({ label }) => label === tag))),
})
const mapDispatchToProps = { setKeyword, setFilters, getUsers }

export default connect(mapStateToProps, mapDispatchToProps)(VolunteersList)
