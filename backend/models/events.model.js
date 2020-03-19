const mongoose = require("mongoose")

const Schema = mongoose.Schema

const eventsSchema = new Schema(
  {
    title: { type: String, required: true },
    teacher: { type: Schema.Types.ObjectId, ref: 'student', required: true },
    start:Date,
    end:Date,
  },
  {
    timestamps: true,
  },
)

const Events = mongoose.model("Classes", eventsSchema)

module.exports = Events
