const mongoose = require('mongoose');
const QuestionnaireSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  responses: { type: Object, required: true }, // Store questionnaire responses
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);
