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
    return Damage.findOne({ damage_id });
  }

  static async deleteByDamageId(id) {
    return Damage.destroy({ where: { id } });
  }
}

module.exports = DamagesPhotosRepo;
