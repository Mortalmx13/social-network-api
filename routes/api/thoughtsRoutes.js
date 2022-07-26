const router = require('express').Router();
//requires for routes
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// get and post routes
router.route('/').get(getThought).post(createThought);

// put/get/delete routes for thoughts
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

//post route for reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

//delete routes for reactions
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


module.exports = router;