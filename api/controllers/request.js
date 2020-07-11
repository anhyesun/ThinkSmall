const Request = require('../models/request')
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
        .then(() => {
            return res.status(201).json({
                success: true,
                id: request._id,
                message: 'Request created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Request not created!',
            })
        })
}

updateRequest = async (req, res) => {
    const request = req.body

    if (!request) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    await Request.findByIdAndUpdate(ObjectId(req.params.id), request, (err, request) => {
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

deleteRequest = async (req, res) => {
    await Request.findByIdAndDelete(ObjectId(req.params.id), async (err, request) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!request) {
            return res.status(404).json({ success: false, error: `Request not found` })
        }

        await User.updateMany({}, {
            $pull: {
                $or: {
                    requests: { _id: ObjectId(req.params.id) },
                    tasks: { _id: ObjectId(req.params.id) },
                }
            }
        })

        return res.status(200).json({ success: true, data: request })
    }).catch(err => console.log(err))
}

getRequestById = async (req, res) => {
    await Request.findById(ObjectId(req.params.id), (err, request) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!request) {
            return res.status(404).json({ success: false, error: `Request not found` })
        }
        return res.status(200).json({ success: true, data: request })
    }).catch(err => console.log(err))
}

getRequests = async (req, res) => {
    await Request.find({}, (err, requests) => {
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
