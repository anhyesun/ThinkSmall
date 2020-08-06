import {
    TOGGLE_HELP, SET_BUSINESSES, LOAD_BUSINESSES,
} from '../../actions'
import { defaultState } from './misc'

export default (businesses = defaultState, action) => {
    switch (action.type) {
    case LOAD_BUSINESSES: {
        return {
            ...businesses,
            loading: true,
            loaded: false,
        }
    }
    case SET_BUSINESSES: {
        return {
            ...businesses,
            loading: false,
            loaded: true,
            data: action.data,
        }
    }
    case TOGGLE_HELP: {
        const updatedBusinesses = [...businesses]
        const index = businesses.findIndex(({ id }) => id === action.id)
        updatedBusinesses[index].needsHelp = !updatedBusinesses[index].needsHelp
        return updatedBusinesses
    }
    default:
        return businesses
    }
}
