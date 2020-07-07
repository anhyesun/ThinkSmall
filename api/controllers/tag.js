const Tag = require('../models/tag')
const ObjectId = require('./helper')

createTag = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an tag',
        })
    }

    const tag = new Tag(body)

    if (!tag) {
        return res.status(400).json({ success: false, error: err })
    }

    tag
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tag._id,
                message: 'Tag created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tag not created!',
            })
        })
}

updateTag = async (req, res) => {
    const tag = req.body

    if (!tag) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    await Tag.findByIdAndUpdate(ObjectId(req.params.id), tag, (err, tag) => {
        if (!tag) {
            return res.status(404).json({
                err,
                message: 'Tag not found!',
            })
        }
        return res.status(200).json({
            success: true,
            id: tag._id,
            message: 'Tag updated!',
        })
    })
}

deleteTag = async (req, res) => {
    await Tag.findByIdAndDelete(ObjectId(req.params.id), (err, tag) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tag) {
            return res.status(404).json({ success: false, error: `Tag not found` })
        }

        return res.status(200).json({ success: true, data: tag })
    }).catch(err => console.log(err))
}

getTagById = async (req, res) => {
    await Tag.findById(ObjectId(req.params.id), (err, tag) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        console.log(tag)

        if (!tag) {
            return res.status(404).json({ success: false, error: `Tag not found` })
        }
        return res.status(200).json({ success: true, data: tag })
    }).catch(err => console.log(err))
}

getTags = async (req, res) => {
    await Tag.find({}, (err, tags) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tags.length) {
            return res.status(404).json({ success: false, error: `Tag not found` })
        }
        return res.status(200).json({ success: true, data: tags })
    }).catch(err => console.log(err))
}

module.exports = {
    createTag,
    updateTag,
    deleteTag,
    getTags,
    getTagById,
}
