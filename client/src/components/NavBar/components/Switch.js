import React, { useRef, useState } from 'react'
import useSpring from 'react-use/lib/useSpring'
import { connect } from 'react-redux'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Grid from '@material-ui/core/Grid'
import { switchView } from '../../../actions'
import classes from '../../../modules/nav.module.css'

function SmallSwitch({ switchState, toggleSwitch }) {
    const [pixel, setPixel] = useState(switchState ? 25 : 0)
    const left = useSpring(pixel, 100, 15)
    const Switch = useRef(null)
    const onToggle = () => {
        setPixel(prev => (prev > 0 ? 0 : 25))
        toggleSwitch()
    }
    return (
        <div style={{ margin: '10px auto' }}>
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item><Icon icon="list" /></Grid>
                <Grid item style={{ display: 'flex' }}>
                    <div ref={Switch} className={classes.toggle} onClick={onToggle} style={{}}>
                        <div className={classes.thumb} style={{ left }} />
                    </div>
                </Grid>
                <Grid item><Icon icon="map-marked-alt" /></Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = ({ switchState }) => ({ switchState })
const mapDispatchToProps = dispatch => ({
    toggleSwitch: () => dispatch(switchView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallSwitch)
