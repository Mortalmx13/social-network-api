const router = require('express').Router();

//calls in the different controls from thoughController
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughtController');

//different routes for get/put/delete/post for thoughts and post/delete for reactions
router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 
router.route('/:userId').post(createThoughts);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;