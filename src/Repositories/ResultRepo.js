const Result = require("../Models/Result");

class ResultRepo {
  static async save(data) {
     return  Result.create(data);
  }

  static async findAll() {
     return Result.find({}).populate('survey').exec(); 
  }

  static async findById(id) {
      return  Result.findById(id).populate('survey');
  }

  static async findBySurvey(survey) {
    return Result.find({ survey }).populate('survey').exec();
  }

  static async updateById(id , data) {
      return  Result.findByIdAndUpdate( id, data, { new: true } ).exec();
  }

  static async deleteById(id) {
    return Result.findByIdAndDelete(id);
  }

  static async deleteBySurvey(survey) {
    return Result.deleteMany({ survey }).exec();
  }

};

module.exports = ResultRepo;