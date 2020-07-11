import {
    OPEN_FORM, CLOSE_FORM,
    SET_CONVERSATION,
    SET_FILTERS,
    SET_KEYWORD,
    SWITCH_VIEW,
} from '../../actions'

export const defaultState = {
    loading: true,
    loaded: false,
    data: [],
}

export const filters = (filters = [], action) => {
    switch (action.type) {
    case SET_FILTERS:
        return [...action.tags]
    default:
        return filters
    }
}

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

export const switchState = (switchState = false, action) => {
    switch (action.type) {
    case SWITCH_VIEW:
        return !switchState
    default:
        return switchState
    }
}
