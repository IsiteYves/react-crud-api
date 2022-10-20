const DamagesRepo = require("../Repositories/DamagesRepo");

class DamagesService {
   static save(newDamage) {
       return DamagesRepo.save(newDamage);
   } 
   
   static async getAllDamages() {
       return DamagesRepo.findAll();
   }
   
   static async getDamage(id) {
    return DamagesRepo.findById(id);
   }
   
   static async updateDamageById(id, data) {
       return DamagesRepo.updateById(id, data);
   }

   static async deleteDamageById(id) {
    return DamagesRepo.deleteById(id);
   }
}

module.exports = DamagesService;