const express = require('express')
const router = express.Router()
const {getClubs, createClub, joinClub, deleteClub} = require('../controllers/clubController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(getClubs).post(protect, createClub)

router.route('/:id').put(protect, joinClub).delete(deleteClub)

module.exports = router  