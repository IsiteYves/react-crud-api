const router = require("express").Router();
const SurveyService = require("../../Services/SurveyService");
const { check, validationResult }  = require("express-validator");

router.delete(
      '/:id',
      [
        check('id', 'SurveyId is required').exists()
      ],
      async (req, res) => {
    
     const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   

     const { id } = req.params;
     try {

       await SurveyService.deleteSurveyById(id);
       return res.status(200).json({ status: 'Deleted successfully' });
       
     } catch(e) {
       return res.status(500).json({ error: e.message });
     }
});

module.exports = router;