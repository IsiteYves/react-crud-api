// @ts-nocheck
const { Damage } = require("../Models");

class DamagesRepo {
  static async save(data) {
    return Damage.create(data);
  }

  static async findAll() {
    return Damage.findAll();
  }

  static async findById(id) {
    return Damage.findOne({ id });
  }

  static async updateById(id, data) {
    return Damage.update(data, { where: { id } });
  }

  static async deleteById(id) {
    return Damage.destroy({ where: { id } });
  }
}

module.exports = DamagesRepo;
