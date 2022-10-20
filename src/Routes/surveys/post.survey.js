const router = require("express").Router();
const SurveyService = require("../../Services/SurveyService");
const { check, validationResult }  = require("express-validator");

router.post(
      '/',
      [
          check("title", "Title is required").exists().not().isEmpty(),
          check("subtitle", "Subtitle is required").exists().not().isEmpty()
      ],
      async (req, res) => {
    
     const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   

     try {
       req.body.owner = req.user._id;
       const survey = await SurveyService.save(req.body);
       await survey.save();

       return res.status(200).json({ survey });
       
     } catch(e) {
       return res.status(500).json({ error: e.message });
     }
});

module.exports = router;