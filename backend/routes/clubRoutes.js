const express = require('express')
const router = express.Router()
const {getClub, createClub, updateClub, deleteClub} = require('../controllers/clubController')

router.route('/').get(getClub).post(createClub)

router.route('/:id').delete(deleteClub).put(updateClub)





module.exports = router  