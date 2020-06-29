import { PUSH_MESSAGE } from '../../actions'
import { defaultConversations } from '../../constant'
import { now } from '../helper'

export default (conversations = defaultConversations, action) => {
    switch (action.type) {
    case PUSH_MESSAGE:
        const { uid, iid, message } = action
        const { messages = [] } = conversations[iid]
        return Object.assign([...conversations], {
            [iid]: {
                ...conversations[iid],
                messages: [...messages, { id: uid, message, timestamp: now() }],
            },
        })
    default:
        return conversations
    }
}
