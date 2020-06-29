import React, { useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from 'material-ui-search-bar'
import { setKeyword as set } from '../actions'
import classes from '../modules/search.module.css'

const Search = ({ set }) => {
    const [search, setSearch] = useState('')
    const handleSearch = () => set(search)

    return (
        <SearchBar
            value={search}
            className={classes.search}
            onChange={setSearch}
            onRequestSearch={handleSearch}
        />
    )
}

export default connect(null, { set })(Search)
