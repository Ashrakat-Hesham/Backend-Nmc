import { model, Schema, Types } from 'mongoose';


const aboutUsPageSchema = new Schema({
    CORPORATE: { type: String, required: true },
    INCORPORATION: { type: String, required: true },
    aboutus: { type: String, required: true },
    INCORPORATIONDetails: { type: String, required: true },
    TARGET: { type: String, required: true },
    TARGETDetails: { type: String, required: true },
    Strategy: { type: String, required: true },
    StrategyDetails: { type: String, required: true },
    MISSION: { type: String, required: true },
    MISSIONDetails: { type: String, required: true },
    OURGOAL: { type: String, required: true },
    OURGOALDetails: { type: String, required: true },
    POLICY: { type: String, required: true },
    POLICYDetails: { type: String, required: true },
    ChairmanStatement: { type: String, required: true },
    ChairmanStatementDetails: { type: String, required: true },
    OurConsultants: { type: String, required: true },
    OurConsultantsDetails: { type: String, required: true },
    OurContractors: { type: String, required: true },
    OurContractorsDetails: { type: String, required: true },
    aboutusbgimg: { type: String, required: true },
    ownerimg: { type: String, required: true },
}, {
    timestamps: true
})

const aboutUsDataModel = model('AboutUsPageData', aboutUsPageSchema)

export default aboutUsDataModel;