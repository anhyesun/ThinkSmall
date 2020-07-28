import React from 'react'
import classes from '../modules/about.module.css'

const Square = ({
    title, subtitle, src,
}) => (
    <div className={classes.square}>
        <div>
            <img src={src} className={classes.img} alt={title} />
            <h3>{title}</h3>
            <p style={{ fontSize: 'small' }}>{subtitle}</p>
        </div>
    </div>
)

const About = () => (
    <div className={classes.root}>
        
        <div className={classes.container}>
            <h2> Get to know ThinkSmall </h2>
        </div>
        
        <div className={classes.container}>
            <h3> Helping our community to think bigger by helping our small businesses! </h3>
        </div>

        <div className={classes.container}>
            <Square 
                title="Our Goal"
                subtitle="ThinkSmall's goal is to help small businesses in Vancouver by connecting their needs with the services that their community can offer. Small businesses have a harder time competing in the market to keep their businesses alive, but they have been hit especially hard during this COVID-19 pandemic."
                src="https://images.unsplash.com/photo-1526958097901-5e6d742d3371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            <Square 
                title="How it works"
                subtitle="ThinkSmall will help small business owners by providing a directory of small businesses, as well as a platform to connect small business owners who have a need for services (such as the creation of the logo, and translation for flyers) with their volunteers who have the skillset to help them."
                src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2295&q=80"
            />
        </div>
    </div>
)

export default About
