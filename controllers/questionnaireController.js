const Questionnaire = require('../models/Questionnaire');

exports.submitQuestionnaire = async (req, res) => {
  const { responses } = req.body;
  try {
    const questionnaire = new Questionnaire({
      user: req.user.id,
      responses,
    });
    await questionnaire.save();
    res.json({ msg: 'Questionnaire submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getQuestionnaires = async (req, res) => {
  try {
    const questionnaires = await Questionnaire.find().populate('user', ['name', 'email']);
    res.json(questionnaires);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
