const express = require('express');
const router = express.Router();
const { submitQuestionnaire, getQuestionnaires } = require('../controllers/questionnaireController');
const auth = require('../middleware/authMiddleware');

// @route   POST api/questionnaire
// @desc    Submit questionnaire responses
// @access  Private
router.post('/', auth, submitQuestionnaire);

// @route   GET api/questionnaire
// @desc    Get all questionnaire responses
// @access  Private/Admin
router.get('/', auth, getQuestionnaires);

module.exports = router;
