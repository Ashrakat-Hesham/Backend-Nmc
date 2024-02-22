import { model, Schema } from 'mongoose';
const MainDataSchema = new Schema({
    career: { type: String, required: true },
    welcomeWord: { type: String, required: true },
    apply: { type: String, required: true },
    careerimage: { type: String, required: true }
}, {
    timestamps: true
})
const MainDataModel = model('MainCareerData', MainDataSchema)
export default MainDataModel;