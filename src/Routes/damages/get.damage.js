const router = require("express").Router();
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
    const damageRecord = await DamagesService.getDamage(id);
    return res.status(200).json({ damageRecord });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

module.exports = router;
