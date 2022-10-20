const router = require("express").Router();
const ResultService = require("../../Services/ResultService");
const { check, validationResult }  = require("express-validator");


router.post(
      '/',
      [
          check("survey", "SurveyId is required").exists().not().isEmpty(),
          check("result", "Result is required").exists().not().isEmpty()
      ],
      async (req, res) => {
    
     const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   

     try {

       const result = await ResultService.save(req.body);
       await result.save();

       return res.status(200).json({ result });
       
     } catch(e) {
       return res.status(500).json({ error: e.message });
     }
});

module.exports = router;