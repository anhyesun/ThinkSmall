export const PUSH_MESSAGE = 'PUSH_MESSAGE'
export const SET_CONVERSATION = 'SET_CONVERSATION'
export const SWITCH_VIEW = 'SWITCH_VIEW'
export const OPEN_FORM = 'OPEN_FORM'
export const CLOSE_FORM = 'CLOSE_FORM'
export const TOGGLE_HELP = 'TOGGLE_HELP'
export const SET_KEYWORD = 'SET_KEYWORD'
export const SET_FILTERS = 'SET_FILTERS'

export const push = (uid, iid, message) => ({
    type: PUSH_MESSAGE,
    uid,
    iid,
    message,
})

export const setConversation = id => ({
    type: SET_CONVERSATION,
    id,
})

export const switchView = () => ({
    type: SWITCH_VIEW,
})

export const helpToggle = id => ({
    type: TOGGLE_HELP,
    id,
})

export const openForm = id => ({
    type: OPEN_FORM,
    id,
})

export const closeForm = id => ({
    type: CLOSE_FORM,
    id,
})

export const setKeyword = keyword => ({
    type: SET_KEYWORD,
    keyword,
})

export const setFilters = tags => ({
    type: SET_FILTERS,
    tags,
})

export * from './business'
export * from './request'
export * from './user'
