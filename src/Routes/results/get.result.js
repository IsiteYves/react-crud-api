const router = require("express").Router();
const ResultService = require("../../Services/ResultService");


router.get("/", async (req, res) => {
  const { id = null, survey } = req.query;

  try {
    if (survey != undefined) {
      const results = await ResultService.getResultBySurvey(survey);
      return res.status(200).json({ results });
    }

    if (id) {
      const result = await ResultService.getResultById(id);
      return res.status(200).json({ survey: result });
    }

    const results = await ResultService.getResults();
    return res.status(200).json({ results });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
