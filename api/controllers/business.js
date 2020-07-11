const Business = require('../models/business')
const User = require('../models/user')
const ObjectId = require('./helper')

createBusiness = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an business',
        })
    }

    const business = new Business(body)

    if (!business) {
        return res.status(400).json({ success: false, error: err })
    }

    business
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: business._id,
                message: 'Business created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Business not created!',
            })
        })
}

updateBusiness = async (req, res) => {
    const business = req.body

    if (!business) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    await Business.findByIdAndUpdate(ObjectId(req.params.id), business, (err, business) => {
        if (!business) {
            return res.status(404).json({
                err,
                message: 'Business not found!',
            })
        }
        return res.status(200).json({
            success: true,
            id: business._id,
            message: 'Business updated!',
        })
    })
}

deleteBusiness = async (req, res) => {
    await Business.findByIdAndDelete(ObjectId(req.params.id), async (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!business) {
            return res.status(404).json({ success: false, error: 'Business not found' })
        }

        await User.updateMany({}, { $pull: { owns: { _id: ObjectId(req.params.id) } } })

        return res.status(200).json({ success: true, data: business })
    }).catch(err => console.log(err))
}

getBusinessById = async (req, res) => {
    await Business.findById(ObjectId(req.params.id), (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!business) {
            return res.status(404).json({ success: false, error: 'Business not found' })
        }
        return res.status(200).json({ success: true, data: business })
    }).catch(err => console.log(err))
}

getBusinesses = async (req, res) => {
    await Business.find({}, (err, businesses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!businesses.length) {
            return res.status(404).json({ success: false, error: 'Business not found' })
        }
        return res.status(200).json({ success: true, data: businesses })
    }).catch(err => console.log(err))
}

module.exports = {
    createBusiness,
    updateBusiness,
    deleteBusiness,
    getBusinesses,
    getBusinessById,
}
