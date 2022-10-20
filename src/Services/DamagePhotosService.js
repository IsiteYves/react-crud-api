const DamagePhotosRepo = require("../Repositories/DamagePhotosRepo");

class DamagePhotosService {
  static save(newDamagePhotos) {
    return DamagePhotosRepo.save(newDamagePhotos);
  }

  static async getAllDamages() {
    return DamagePhotosRepo.findAll();
  }

  static async getDamage(damage_id) {
    return DamagePhotosRepo.findByDamageId(damage_id);
  }

  static async deleteByDamageId(damage_id) {
    return DamagePhotosRepo.deleteByDamageId(damage_id);
  }
}

module.exports = DamagePhotosService;
