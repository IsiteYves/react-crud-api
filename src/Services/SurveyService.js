const SurveyRepo = require("../Repositories/SurveyRepo");

class SurveyService {
   static save(survey) {
       return SurveyRepo.save(survey);
   } 
   
   static async getAllSurveys() {
       return SurveyRepo.findAll();
   }
   
   static async getSurvey(id) {
    return SurveyRepo.findById(id);
   }
   static async getSurveyByOwner(owner) {
    return SurveyRepo.findByOwner(owner);
   }

   static async getSurveyByIdAndOwner(id, owner) {
       return SurveyRepo.findByIdAndOwner(id, owner);
   }

   static async getSurveyByOwner(owner) {
    return SurveyRepo.findByOwner(owner);
   }

   static async getSurveyByPublishedAndOwner(published, owner) {
       return SurveyRepo.findByPublishedAndOwner(published, owner);
   }

   static async getSurveyByAnsweredAndOwner(answered, owner) {
    return SurveyRepo.findByAnsweredAndOwner(answered, owner);
   }
   static async updateSurveyById(id, data) {
       return SurveyRepo.updateById(id, data);
   }

   static async deleteSurveyById(id) {
    return SurveyRepo.deleteById(id);
   }
}

module.exports = SurveyService;