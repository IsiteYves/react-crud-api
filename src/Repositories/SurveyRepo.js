const Survey = require("../Models/Survey");

class SurveyRepo {
  static async save(data) {
     return  Survey.create(data);
  }

  static async findAll() {
     return Survey.find({}).exec(); 
  }

  static async findById(id) {
    return Survey.findById(id);
  }

  static async findByIdAndOwner(id) {
      return  Survey.findById(id);
  }

  static async findByOwner(owner) {
    return Survey.find({ owner }).exec();
  }
  static async findByPublishedAndOwner(published, owner) {
      return Survey.find({ owner , published }).exec();
  }

  static async findByAnsweredAndOwner(answered, owner) {
    return Survey.find({ owner, answered }).exec();
  }

  static async updateById(id , data) {
      return  Survey.findByIdAndUpdate( id, data, { new: true } ).exec();
  }

  static async deleteById(id) {
    return Survey.findByIdAndDelete(id);
  }

  static async deleteByPublished(published) {
    return Survey.deleteMany({ published });
  }

};

module.exports = SurveyRepo;