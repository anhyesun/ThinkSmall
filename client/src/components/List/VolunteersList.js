import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem } from '@material-ui/lab'
import Tags from '../Tags/Tags'
import Search from '../Search'
import VolunteerCard from './components/VolunteerCard'
import { setKeyword, setFilters } from '../../actions'
import { defaultSkills } from '../../constant'
import classes from '../../modules/list.module.css'

const VolunteersList = ({
    volunteers, filters, keyword, setKeyword, setFilters,
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
                <Tags tags={defaultSkills} canSelect />
            </div>
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
                        .filter(({ volunteerName }) => volunteerName.includes(keyword))
                        .filter(({ tags }) => !filters.length
                            || filters.every(tag => tags.some(({ label }) => label === tag)))
                        .slice((currentPage - 1) * 6, currentPage * 6)
                        .map(({ id, ...props }) => <VolunteerCard key={id} {...props} />)}
            </div>
        </div>
    )
}

const mapStateToProps = ({ volunteers, filters, keyword }) => ({ volunteers, filters, keyword })

export default connect(mapStateToProps, { setKeyword, setFilters })(VolunteersList)
