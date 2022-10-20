const router = require("express").Router();
const SurveyService = require("../../Services/SurveyService");
const { check, validationResult }  = require("express-validator");

router.put(
      '/:id',
      [
          check("id", "SurveyId is required").exists().not().isEmpty(),
      ],
      async (req, res) => {
    
     const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   
     
     const  { id } = req.params;
     const  { questions = [] } = req.body;

     try {
       const survey = await SurveyService.getSurvey(id);
       if(!survey) return res.status(400).json({ message: 'Survey not found' });
       
       req.body.questions = [...questions, ...survey.questions];
       await SurveyService.updateSurveyById(id, req.body);
       
       return res.status(200).json({ status: 'Successfull updated survey' });
       
     } catch(e) {
       return res.status(500).json({ error: e.message });
     }
});

module.exports = router;