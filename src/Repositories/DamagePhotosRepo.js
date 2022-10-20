// @ts-nocheck
const { DamagePhotos } = require("../Models");

class DamagesPhotosRepo {
  static async save(data) {
    for (let datum in data) {
      DamagePhotos.create(datum);
    }
    return data;
  }

  static async findAll() {
    return DamagePhotos.findAll();
  }

  static async findByDamageId(damage_id) {
    return DamagePhotos.find({ damage_id });
  }

  static async deleteDamagePhotos(ids) {
    for (let id of ids) {
      DamagePhotos.destroy({ where: { id } });
    }
    return { message: `Successfully deleted ${ids.length} photos records` };
  }
}

module.exports = DamagesPhotosRepo;
