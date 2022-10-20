const router = require("express").Router();
const ResultService = require("../../Services/ResultService");
const { check, validationResult }  = require("express-validator");


router.put(
      '/:id',
      [
          check("id", "ResultId is required").exists().not().isEmpty(),
      ],
      async (req, res) => {
    
     const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   
     
     const  { id } = req.params;

     try {
       const result = await ResultService.getResultById(id);
       if(!result) return res.status(400).json({ message: 'Result not found' });
       
       await ResultService.updateResult(id, req.body);
       return res.status(200).json({ status: 'Successfull updated result' });
       
     } catch(e) {
       return res.status(500).json({ error: e.message });
     }
});

module.exports = router;