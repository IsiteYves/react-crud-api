const PersonRepo = require("../Repositories/Person-repo");

class PersonService{
   static create(person) {
       return PersonRepo.save( person );
   } 
   
   static async getPeople() {
       return PersonRepo.findAll();
   }

   static async getPersonById(id){
       return PersonRepo.findById(id);
   }

   static async getPersonByEmail(email) {
       return PersonRepo.findByEmail(email);
   }

   static async updatePersonById(id, data) {
       return PersonRepo.updateById(id, data);
   }

   static async getPeopleByOccupations(occupations) {
       return PersonRepo.findByOccupations(occupations);
   }

   static updatePeopleAge(data) {
       return PersonRepo.updateMany(data);
   }
}

module.exports = PersonService;