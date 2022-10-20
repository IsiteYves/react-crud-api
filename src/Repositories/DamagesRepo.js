const Damage = require("../Models/Damage");

class DamagesRepo {
  static async save(data) {
    return Damage.create(data);
  }

  static async findAll() {
    return Damage.find({}).exec();
  }

  static async findById(id) {
    return Damage.findById(id);
  }

  static async updateById(id, data) {
    return Damage.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  static async deleteById(id) {
    return Damage.findByIdAndDelete(id);
  }
}

module.exports = DamagesRepo;
