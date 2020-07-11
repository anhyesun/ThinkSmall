import {
    DELETE_BUSINESS, EDIT_BUSINESS, TOGGLE_HELP, SET_BUSINESSES, LOAD_BUSINESSES,
} from '../../actions'
import { defaultState } from './misc'

const businessFields = 7

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
    case DELETE_BUSINESS: {
        return [...businesses.filter(({ id }) => id !== action.id)]
    }
    case TOGGLE_HELP: {
        const updatedBusinesses = [...businesses]
        const index = businesses.findIndex(({ id }) => id === action.id)
        updatedBusinesses[index].needsHelp = !updatedBusinesses[index].needsHelp
        return updatedBusinesses
    }
    case EDIT_BUSINESS: {
        const editedBusinesses = [...businesses]
        const {
            id, storeName, imageUrl, storeOwner, location, description,
            needsHelp, tags,
        } = action
        const properties = [storeName,
            imageUrl,
            storeOwner,
            location,
            description,
            needsHelp,
            tags]
        for (let i = 0; i < editedBusinesses.length; i += 1) {
            if (editedBusinesses[i].id === id) {
                for (let j = 0; j < businessFields; j += 1) {
                    editedBusinesses[i].properties[j] = properties[j]
                }
                break
            }
        }
        return editedBusinesses
    }
    default:
        return businesses
    }
}
