import { model, Schema } from 'mongoose';


const relationsSchema = new Schema({
    url: { type: String, required: true },
    image:{ type: String, required:true},
    title: { type: String, required: true }
}, {
    timestamps: true
})

const relationsModel = model('relations Data', relationsSchema)

export default relationsModel;