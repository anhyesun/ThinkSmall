import {
    SET_KEYWORD,
    SET_CONVERSATION,
    OPEN_FORM, CLOSE_FORM,
    SAVE_REQUEST,
    SWITCH_VIEW,
} from '../../actions'
import { defaultRequests } from '../../constant'

export const keyword = (keyword = '', action) => {
    switch (action.type) {
    case SET_KEYWORD:
        return action.keyword
    default:
        return keyword
    }
}

export const conversation = (conversation = 0, action) => {
    switch (action.type) {
    case SET_CONVERSATION:
        return action.id
    default:
        return conversation
    }
}

export const forms = (forms = {}, action) => {
    switch (action.type) {
    case OPEN_FORM:
        return { ...forms, [action.id]: true }
    case CLOSE_FORM:
        return { ...forms, [action.id]: false }
    default:
        return forms
    }
}

export const requests = (requests = defaultRequests, action) => {
    switch (action.type) {
    case SAVE_REQUEST:
        return [...requests, action.request]
    default:
        return requests
    }
}

export const switchState = (switchState = false, action) => {
    switch (action.type) {
    case SWITCH_VIEW:
        return !switchState
    default:
        return switchState
    }
}
