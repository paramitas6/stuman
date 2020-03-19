const mongoose = require("mongoose")

const Schema = mongoose.Schema

const studentSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: {type: String, required: true },
    tagId: { type: String },
    homeStudio: { type: String, required: true },
    isMember:{type:true},
    isTeacher:{type:Boolean},
    totalCredits: {type: Integer}
  },
  {
    timestamps: true,
  },
)

const Student = mongoose.model("Student", exerciseSchema)

module.exports = Student
