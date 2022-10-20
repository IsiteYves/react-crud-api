const DamagePhotosRepo = require("../Repositories/DamagePhotosRepo");

class DamagePhotosService {
  static save(newDamagePhotos) {
    return DamagePhotosRepo.save(newDamagePhotos);
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
