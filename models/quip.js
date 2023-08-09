const { Schema, model, models } = require("mongoose");



const quipSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    quip: {
        type: String,
        required: [true, 'Quip is required!'],
        },
    tag: {
        type: String,
        required: [true, 'Tag is required!'],
        }
})
const Quip = models.Quip || model("Quip", quipSchema)

export default Quip