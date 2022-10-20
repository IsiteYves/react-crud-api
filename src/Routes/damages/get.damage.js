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
    damageRecord = damageRecord.dataValues;
    if (!damageRecord) {
      return res.status(404).json({ error: "Damage record not found" });
    }
    const damagePhotos = await DamagePhotosService.getDamagePhotosById(id);
    const returnPhotos = [];
    damagePhotos.map((item) => {
      returnPhotos.push(item.dataValues);
    });
    console.log(returnPhotos);
    damageRecord.damagePhotos = damagePhotos;
    return res.status(200).json({ ...damageRecord });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
