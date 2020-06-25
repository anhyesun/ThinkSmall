const Owner = require('../models/owner')

createOwner = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an owner',
        })
    }

    const owner = new Owner(body)

    if (!owner) {
        return res.status(400).json({ success: false, error: err })
    }

    owner
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: owner._id,
                message: 'Owner created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Owner not created!',
            })
        })
}

updateOwner = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Owner.findOne({ _id: req.params.id }, (err, owner) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Owner not found!',
            })
        }
        owner.firstName = body.firstName
        owner.lastName = body.lastName
        owner.imageURL = body.imageURL
        owner.description = body.description
        owner.businesses = body.businesses
        owner
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: owner._id,
                    message: 'Owner updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Owner not updated!',
                })
            })
    })
}

deleteOwner = async (req, res) => {
    await Owner.findOneAndDelete({ _id: req.params.id }, (err, owner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!owner) {
            return res
                .status(404)
                .json({ success: false, error: `Owner not found` })
        }

        return res.status(200).json({ success: true, data: owner })
    }).catch(err => console.log(err))
}

getOwnerById = async (req, res) => {
    await Owner.findOne({ _id: req.params.id }, (err, owner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!owner) {
            return res
                .status(404)
                .json({ success: false, error: `Owner not found` })
        }
        return res.status(200).json({ success: true, data: owner })
    }).catch(err => console.log(err))
}

getOwners = async (req, res) => {
    await Owner.find({}, (err, owners) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!owners.length) {
            return res
                .status(404)
                .json({ success: false, error: `Owner not found` })
        }
        return res.status(200).json({ success: true, data: owners })
    }).catch(err => console.log(err))
}

module.exports = {
    createOwner,
    updateOwner,
    deleteOwner,
    getOwners,
    getOwnerById,
}
