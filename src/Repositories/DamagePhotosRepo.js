// @ts-nocheck
const { DamagePhotos } = require("../Models");

class DamagesPhotosRepo {
  static async save(data, damage_id) {
    await data.map(async (datum) => {
      await DamagePhotos.create({ ...datum, damage_id });
    });
  }

  static async findAll() {
    return DamagePhotos.findAll();
  }

  static async findByDamageId(damage_id) {
    return DamagePhotos.findAll({ damage_id });
  }

  static async deleteDamagePhotos(ids) {
    ids.map((id) => {
      DamagePhotos.destroy({ where: { id } });sky
    });
    return { message: `Successfully deleted ${ids.length} photos records` };
  }
}

module.exports = DamagesPhotosRepo;
