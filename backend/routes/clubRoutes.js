const express = require('express')
const router = express.Router()
const {getClub, createClub, updateClub, deleteClub} = require('../controllers/clubController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getClub).post(protect, createClub)

router.route('/:id').delete(protect, deleteClub).put(protect, updateClub)





module.exports = router  