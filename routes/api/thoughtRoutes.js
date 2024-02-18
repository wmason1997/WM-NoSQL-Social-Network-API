// fill out similarly to courseRoutes.js
const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);
    // NEED TO ADD .delete(deleteReaction)

module.exports = router;