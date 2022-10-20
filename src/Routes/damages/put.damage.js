const router = require("express").Router();
const DamagesService = require("../../Services/DamagesService");
const DamagePhotosService = require("../../Services/DamagePhotosService");
const { check, validationResult } = require("express-validator");

router.put(
  "/:id",
  [check("id", "DamageId is required").exists().not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ error: errors.array() });

    const { id } = req.params;
    try {
      const damageRecord = await DamagesService.getDamage(id);
      if (!damageRecord)
        return res.status(400).json({ message: "Damage record not found" });
      delete req.body.id;
      await DamagesService.updateDamageById(id, req.body);
      if (req.body?.damagePhotos) {
        await DamagePhotosService.save(req.body.damagePhotos);
      }

      return res
        .status(200)
        .json({ status: "Successfully updated damage record" });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
