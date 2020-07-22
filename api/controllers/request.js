const Request = require('../models/request')
const User = require('../models/user')
const ObjectId = require('./helper')

createRequest = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an request',
        })
    }

    const request = new Request(body)

    if (!request) {
        return res.status(400).json({ success: false, error: err })
    }

    request
        .save()
        .then(request => {

            return res.status(201).json({
                success: true,
                id: request._id,
                message: 'Request created!',
                request,
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Request not created!',
            })
        })
}

updateRequest = (req, res) => {
    const request = req.body

    if (!request) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Request.findByIdAndUpdate(ObjectId(req.params.id), request, (err, request) => {
        if (!request) {
            return res.status(404).json({
                err,
                message: 'Request not found!',
            })
        }
        return res.status(200).json({
            success: true,
            id: request._id,
            message: 'Request updated!',
        })
    })
}

deleteRequest = (req, res) => {
    Request.findByIdAndDelete(ObjectId(req.params.id), async (err, request) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!request) {
            return res.status(404).json({ success: false, error: `Request not found` })
        }

        await User.updateMany({}, { $pull: { requests: { _id: ObjectId(req.params.id) } } })
        await User.updateMany({}, { $pull: { tasks: { _id: ObjectId(req.params.id) } } })

        return res.status(200).json({ success: true, data: request })
    }).catch(err => console.log(err))
}

getRequestById = (req, res) => {
    Request.findById(ObjectId(req.params.id), (err, request) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!request) {
            return res.status(404).json({ success: false, error: `Request not found` })
        }
        return res.status(200).json({ success: true, data: request })
    }).catch(err => console.log(err))
}

getRequests = (req, res) => {
    Request.find({}, (err, requests) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!requests.length) {
            return res.status(404).json({ success: false, error: `Request not found` })
        }
        return res.status(200).json({ success: true, data: requests })
    }).catch(err => console.log(err))
}

module.exports = {
    createRequest,
    updateRequest,
    deleteRequest,
    getRequests,
    getRequestById,
}
