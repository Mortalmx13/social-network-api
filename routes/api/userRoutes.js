
const router = require('express').Router();

//setting requires
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/userController');

// different routes for get/put/delete/post for users
router.route('/').get(getAllUsers).post(createUsers);
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

//different routes for delete/post for friends
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router; 