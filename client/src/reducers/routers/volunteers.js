import { ADD_VOLUNTEER, DELETE_VOLUNTEER, EDIT_VOLUNTEER } from '../../actions'
import { defaultVolunteers } from '../../constant'

const volunteerFields = 4

export default (volunteers = defaultVolunteers, action) => {
    switch (action.type) {
    case ADD_VOLUNTEER: {
        const {
            volunteerName,
            avatar,
            description,
            tags,
        } = action
        const id = Math.random()
        return Object.assign([...volunteers], {
            id,
            volunteerName,
            avatar,
            description,
            tags,
        })
    }
    case DELETE_VOLUNTEER: {
        const updatedVolunteers = [...volunteers]
        delete updatedVolunteers[action.id]
        return updatedVolunteers
    }
    case EDIT_VOLUNTEER: {
        const editedVolunteers = [...volunteers]
        const {
            id,
            volunteerName,
            avatar,
            description,
            tags,
        } = action
        const properties = [
            volunteerName,
            avatar,
            description,
            tags,
        ]
        for (let i = 0; i < editedVolunteers.length; i += 1) {
            if (editedVolunteers[i].id === id) {
                for (let j = 0; j < volunteerFields; j += 1) {
                    editedVolunteers[i].properties[j] = properties[j]
                }
                break
            }
        }
        return editedVolunteers
    }
    default:
        return volunteers
    }
}
