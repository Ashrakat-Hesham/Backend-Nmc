import { model, Schema, Types } from 'mongoose';
const contactPageSchema = new Schema({
    contactimage: { type: String, required: true }
}, {
    timestamps: true
})
const contactDataModel = model('ContactPageData', contactPageSchema)
export default contactDataModel;














