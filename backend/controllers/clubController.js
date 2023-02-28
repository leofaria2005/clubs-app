const asyncHandler = require('express-async-handler')

//@desc     Get clubs
//@route    GET /api/clubs
//@access   Private 

const getClub = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a club name')
    }

    res.status(200).json({message: 'Get clubs'})
})

//@desc     Create clubs
//@route    POST /api/clubs
//@access   Private 

const createClub = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Create club'})
})

//@desc     Update clubs
//@route    PUT /api/clubs
//@access   Private 

const updateClub = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update club ${req.params.id}`})
})

//@desc     Delete clubs
//@route    Get /api/clubs
//@access   Private 

const deleteClub = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete club ${req.params.id}`})
})



module.exports = {
    getClub,
    createClub,
    updateClub,
    deleteClub
}