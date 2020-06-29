import { combineReducers } from 'redux'
import businesses from './routers/businesses'
import volunteers from './routers/volunteers'
import conversations from './routers/conversations'
import users from './routers/users'
import {
    keyword, conversation, forms, requests, switchState,
} from './routers/misc'

export default combineReducers({
    businesses,
    volunteers,
    conversation,
    conversations,
    forms,
    keyword,
    requests,
    switchState,
    users,
})
