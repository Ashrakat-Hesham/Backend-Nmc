import { model, Schema } from 'mongoose';
const newsSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    images:[ {type: Object, required: true }],
    visit: { type: String, required: true },
}, { timestamps: true })

const newsModel = model('Newsimg', newsSchema)

export default newsModel;