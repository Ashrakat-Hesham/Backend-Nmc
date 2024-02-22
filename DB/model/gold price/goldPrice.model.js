import { model, Schema, Types } from 'mongoose';


const goldPricePageSchema = new Schema({
    goldprice: { type: String, required: true},
}, {
    timestamps: true
})

const goldPriceDataModel = model('GoldPricePageData', goldPricePageSchema)

export default goldPriceDataModel;














