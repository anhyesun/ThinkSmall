import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Pagination, PaginationItem } from '@material-ui/lab'
import Tags from './Tags/Tags'
import Search from './Search'
import VolunteerCard from './VolunteerCard'
import { clearKeyword as clear } from '../actions'
import classes from '../modules/list.module.css'

const VolunteersList = ({ volunteers, keyword, clear }) => {
    const [currentPage, setPage] = useState(1)
    const handleChange = (_, currentPage) => {
        setPage(currentPage)
    }
    useEffect(() => {
        clear()
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.searchBar}>
                <Search />
                <Tags />
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
                        .slice((currentPage - 1) * 6, currentPage * 6)
                        .map(({ id, ...props }) => <VolunteerCard key={id} {...props} />)}
            </div>
        </div>
    )
}

const mapStateToProps = ({ volunteers, keyword }) => ({ volunteers, keyword })

export default connect(mapStateToProps, { clear })(VolunteersList)
