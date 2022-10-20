const router = require("express").Router();
const DamagesService = require("../../Services/DamagesService");
const DamagePhotosService = require("../../Services/DamagePhotosService");
const { check, validationResult } = require("express-validator");

router.post("/", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

  try {
    const data = { ...req.body };
    if (data?.damagePhotos) {
      delete data.damagePhotos;
    }
    let newDamageRecord = await DamagesService.save(data);
    const newPhotosRecord = await DamagePhotosService.save(
      req.body.damagePhotos
    );
    newDamageRecord.damagePhotos = newPhotosRecord;
    return res.status(200).json(newDamageRecord);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
