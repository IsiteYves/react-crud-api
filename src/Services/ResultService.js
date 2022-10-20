const ResultRepo = require("../Repositories/ResultRepo");

class ResultService {
   static save(survey) {
       return ResultRepo.save(survey);
   } 
   
   static async getResults() {
       return ResultRepo.findAll();
   }

   static async getResultById(id) {
       return ResultRepo.findById(id);
   }

   static async getResultBySurvey(survey) {
       return ResultRepo.findBySurvey(survey);
   }

   static async updateResult(id, data) {
       return ResultRepo.updateById(id, data);
   }

   static async deleteResultById(id) {
    return ResultRepo.deleteById(id);
   }
}

module.exports = ResultService;