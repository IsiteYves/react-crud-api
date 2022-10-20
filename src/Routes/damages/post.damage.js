const router = require("express").Router();
const DamagesService = require("../../Services/DamagesService");
const { check, validationResult } = require("express-validator");

router.post("/", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

  try {
    const newDamageRecord = await DamagesService.save(req.body);
    await newDamageRecord.save();

    return res.status(200).json(newDamageRecord);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
