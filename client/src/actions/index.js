export const PUSH_MESSAGE = 'PUSH_MESSAGE'
export const SET_CONVERSATION = 'SET_CONVERSATION'
export const SWITCH_VIEW = 'SWITCH_VIEW'
export const ADD_BUSINESS = 'ADD_BUSINESS'
export const DELETE_BUSINESS = 'DELETE_BUSINESS'
export const EDIT_BUSINESS = 'EDIT_BUSINESS'
export const ADD_VOLUNTEER = 'ADD_VOLUNTEER'
export const DELETE_VOLUNTEER = 'DELETE_VOLUNTEER'
export const EDIT_VOLUNTEER = 'EDIT_VOLUNTEER'
export const SAVE_REQUEST = 'SAVE_REQUEST'
export const OPEN_FORM = 'OPEN_FORM'
export const CLOSE_FORM = 'CLOSE_FORM'
export const TOGGLE_HELP = 'TOGGLE_HELP'
export const SET_KEYWORD = 'SET_KEYWORD'

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

export const addBusiness = business => ({
    type: ADD_BUSINESS,
    business,
})

export const deleteBusiness = id => ({
    type: DELETE_BUSINESS,
    id,
})

export const helpToggle = id => ({
    type: TOGGLE_HELP,
    id,
})

export const editBusiness = (id, storeName, avatar, storeOwner, location, description,
    needsHelp, tags) => ({
    type: EDIT_BUSINESS,
    id,
    storeName,
    avatar,
    storeOwner,
    location,
    description,
    needsHelp,
    tags,
})

export const addVolunteer = (volunteerName, avatar, description, tags) => ({
    type: ADD_VOLUNTEER,
    volunteerName,
    avatar,
    description,
    tags,
})

export const deleteVolunteer = id => ({
    type: DELETE_VOLUNTEER,
    id,
})

export const editVolunteer = (id, volunteerName, avatar, description, tags) => ({
    type: EDIT_VOLUNTEER,
    id,
    volunteerName,
    avatar,
    description,
    tags,
})

export const saveRequest = request => ({
    type: SAVE_REQUEST,
    request,
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

export const clearKeyword = () => setKeyword('')
