const asyncHandler = require('express-async-handler')
const Club = require('../models/clubModel')
const User = require('../models/userModel')

//@desc     Get clubs
//@route    GET /api/clubs
//@access   Private 

const getClubs = asyncHandler( async (req, res) => {
    const clubs  = await Club.find()

    res.status(200).json(clubs)
})

//@desc     Create clubs
//@route    POST /api/clubs
//@access   Private 

const createClub = asyncHandler( async (req, res) => {
    if(!req.body.name || !req.body.description){
        res.status(400)
        throw new Error('Missing club information')
    }
    const club = await Club.create({
        name: req.body.name,
        description: req.body.description,

    })
    res.status(200).json(club)
})

//@desc     Join clubs
//@route    PUT /api/clubs
//@access   Public 

    const updatedClub = await Club.findByIdAndUpdate(req.params.id, {$push: {"members": {name:req.user.name}}} , {new: true, upsert: true})
 
    res.status(200).json(updatedClub)


//@desc     Delete clubs
//@route    Get /api/clubs
//@access   Private 

const deleteClub = asyncHandler( async (req, res) => {
    const club = await Club.findByIdAndRemove(req.params.id)

    if(!club){
        res.status(400)
        throw new Error('Club not found')
    }
    res.status(200).json(typeof club + ' ' + club + ' ' + club.id)
    

    
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getClubs,
    createClub,
    deleteClub
}