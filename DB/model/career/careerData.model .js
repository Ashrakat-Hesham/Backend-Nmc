import { model, Schema } from 'mongoose';
const careerSchema = new Schema({
    jobTitle: { type: String, required: true },
    experience: { type: String, required: true },
}, {
    timestamps: true
})
const careerModel = model('careerData', careerSchema)
export default careerModel;