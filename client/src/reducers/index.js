import { combineReducers } from 'redux'
import businesses from './routers/businesses'
import conversations from './routers/conversations'
import requests from './routers/requests'
import { users, currentUser } from './routers/users'
import {
    keyword, conversation, forms, switchState, filters,
} from './routers/misc'

export default combineReducers({
    businesses,
    conversation,
    conversations,
    currentUser,
    filters,
    forms,
    keyword,
    requests,
    switchState,
    users,
})
