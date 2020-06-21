import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../modules/home.module.css'

const Square = ({
    title, subtitle, to, src,
}) => (
    <Link to={to}>
        <div className={classes.square}>
            <div>
                <img src={src} className={classes.img} alt={title} />
                <h3>{title}</h3>
                <p style={{ fontSize: 'small' }}>{subtitle}</p>
            </div>
        </div>
    </Link>
)

const Home = () => (
    <div className={classes.root}>
        <Square
            title="Business Owner"
            subtitle="We need a nice logo for our website!"
            to="/businesses"
            src="https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        />
        <Square
            title="Volunteer"
            subtitle="Looking to get involved in the community!"
            to="/volunteers"
            src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        />
    </div>
)

export default Home
