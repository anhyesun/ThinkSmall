import { combineReducers } from 'redux';
import businesses from './businesses';
import volunteers from './volunteers';
import conversation from './conversation';
import conversations from './conversations';
import forms from './forms';
import requests from './requests';
import switchState from './switchState';
import users from './users';

export default combineReducers({
    businesses,
    volunteers,
    conversation,
    conversations,
    forms,
    requests,
    switchState,
    users,
});
