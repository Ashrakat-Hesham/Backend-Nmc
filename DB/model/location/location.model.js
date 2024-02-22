import { model, Schema, Types } from 'mongoose';


const locationPageSchema = new Schema({
    location: { type: String, required: true },
}, {
    timestamps: true
})

const locationDataModel = model('LocationPageData', locationPageSchema)

export default locationDataModel;














