const router = require("express").Router();
const DamagePhotosService = require("../../Services/DamagePhotosService");
const DamagesService = require("../../Services/DamagesService");

router.get("/", async (req, res) => {
  try {
    const damageRecord = await DamagesService.getAllDamages();
    return res.status(200).json(damageRecord);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let damageRecord = await DamagesService.getDamage(id);
    const damagePhotos = await DamagePhotosService.getDamagePhotosById(id);
    damageRecord.damagePhotos = damagePhotos;
    return res.status(200).json({ damageRecord });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
