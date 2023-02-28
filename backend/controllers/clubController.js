const asyncHandler = require('express-async-handler')
const Club = require('../models/clubModel')

//@desc     Get clubs
//@route    GET /api/clubs
//@access   Private 

const getClub = asyncHandler( async (req, res) => {
    const clubs  = await Club.find()

    res.status(200).json(clubs)
})

//@desc     Create clubs
//@route    POST /api/clubs
//@access   Private 

const createClub = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Missing club information')
    }
    const clubs = await Club.create({
        text: req.body.text,
        /*name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        meetingTime: req.body.meetingTime,*/
        
    })
    res.status(200).json(clubs)
})

//@desc     Update clubs
//@route    PUT /api/clubs
//@access   Private 

const updateClub = asyncHandler( async (req, res) => {
    const club = await Club.findById(req.params.id)

    if(!club){
        res.status(400)
        throw new Error('Club not found')
    }

    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedClub)
})

//@desc     Delete clubs
//@route    Get /api/clubs
//@access   Private 

const deleteClub = asyncHandler( async (req, res) => {
    club = await Club.findByIdAndRemove(req.params.id)

    if(!club){
        res.status(400)
        throw new Error('Club not found')
    }

    

    res.status(200).json({id: req.params.id})
})



module.exports = {
    getClub,
    createClub,
    updateClub,
    deleteClub
}