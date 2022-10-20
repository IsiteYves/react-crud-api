const DamagePhotosRepo = require("../Repositories/DamagePhotosRepo");

class DamagePhotosService {
  static save(newDamagePhotos, damage_id) {
    return DamagePhotosRepo.save(newDamagePhotos, damage_id);
  }

  static async getAllDamages() {
    return DamagePhotosRepo.findAll();
  }

  static async getDamagePhotosById(damage_id) {
    return DamagePhotosRepo.findByDamageId(damage_id);
  }

  static async deleteDamagePhotos(ids) {
    return DamagePhotosRepo.deleteDamagePhotos(ids);
  }
}

module.exports = DamagePhotosService;
