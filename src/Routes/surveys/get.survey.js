const router = require("express").Router();
const SurveyService = require("../../Services/SurveyService");


router.get("/",  async (req, res) => {
  const {  id, answered, published } = req.query;
  const user = req.user

  try {

    if (answered != undefined) {
      const surveys = await SurveyService.getSurveyByAnsweredAndOwner(answered, user._id);
      return res.status(200).json({ surveys });
    }

    if (published != undefined) {
      const surveys = await SurveyService.getSurveyByPublishedAndOwner(published, user._id);
      return res.status(200).json({ surveys });
    }

    if (id) {
      const survey = await SurveyService.getSurveyByIdAndOwner(id, user._id);
      return res.status(200).json({ survey });
    }

    const surveys = await SurveyService.getSurveyByOwner(user._id);
    return res.status(200).json({ surveys });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
