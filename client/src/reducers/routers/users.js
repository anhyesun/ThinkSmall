import {
    LOAD_USERS, SET_USERS,
    LOAD_CURRENT_USER, SET_CURRENT_USER,
} from '../../actions'
import { defaultState } from './misc'

export const users = (users = defaultState, action) => {
    switch (action.type) {
    case LOAD_USERS: {
        return {
            ...users,
            loading: true,
            loaded: false,
        }
    }
    case SET_USERS: {
        return {
            ...users,
            loading: false,
            loaded: true,
            data: action.data,
        }
    }
    default:
        return users
    }
}

export const currentUser = (currentUser = defaultState, action) => {
    switch (action.type) {
    case LOAD_CURRENT_USER: {
        return {
            ...currentUser,
            loading: true,
            loaded: false,
        }
    }
    case SET_CURRENT_USER: {
        return {
            ...currentUser,
            loading: false,
            loaded: true,
            data: action.data,
        }
    }
    default:
        return currentUser
    }
}
