import { combineReducers } from 'redux'
import businesses from './routers/businesses'
import volunteers from './routers/volunteers'
import conversations from './routers/conversations'
import users from './routers/users'
import {
    keyword, conversation, forms, requests, switchState, filters,
} from './routers/misc'

export default combineReducers({
    businesses,
    conversation,
    conversations,
    filters,
    forms,
    keyword,
    requests,
    switchState,
    users,
    volunteers,
})
