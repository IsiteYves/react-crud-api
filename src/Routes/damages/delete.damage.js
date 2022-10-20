const router = require("express").Router();
const DamagesService = require("../../Services/DamagesService");
const { check, validationResult } = require("express-validator");
const DamagePhotosService = require("../../Services/DamagePhotosService");

router.delete(
  "/:id",
  [check("id", "DamageId is required").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ error: errors.array() });

    const { id } = req.params;
    try {
      await DamagesService.deleteDamageById(id);
      const damagesToDelete = await DamagePhotosService.getDamagePhotosById(id);
      const ids = [];
      for (let damage of damagesToDelete) {
        ids.push(damage.id);
      }
      await DamagePhotosService.deleteDamagePhotos(ids);
      return res.status(200).json({ status: "Deleted successfully" });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
