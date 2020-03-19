const mongoose = require("mongoose")

const Schema = mongoose.Schema

const classesSchema = new Schema(
  {
    Title: { type: String, required: true },
    teacher: { type: Schema.Types.ObjectId, ref: 'student', required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    days:{type:String}
  },
  {
    timestamps: true,
  },
)

const Classes = mongoose.model("Classes", classesSchema)

module.exports = Classes
