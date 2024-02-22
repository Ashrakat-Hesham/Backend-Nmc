import { model, Schema } from 'mongoose';
const homePageSchema = new Schema({
    header: { type: String, required: true },
    aboutUsText: { type: String, required: true },
    aboutProjectsUmrus: { type: String, required: true },
    aboutProjectsUmshakieb: { type: String, required: true },
    ReadMore: { type: String, required: true },
    ourProjectsText: { type: String, required: true },
    consultantText: { type: String, required: true },
    newsText: { type: String, required: true },
    newsDetails: { type: String, required: true },
    sustainbilityText: { type: String, required: true },
    sustainbilityIcons: { type: String, required: true },
    footerText: { type: String, required: true },
    footerData: { type: String, required: true },//copyright
    footerEmail: { type: String, required: true },
    footerPhone: { type: String, required: true },
    footeraddress: { type: String, required: true },
    footerLinkedIn: { type: String, required: true },
    footerFacebook: { type: String, required: true },
    footerTwitter: { type: String, required: true },
    clickableTabs: { type: String, required: true },
    whitelogo: { type: String, required: true },
    blacklogo: { type: String, required: true },
    footer: { type: String, required: true },
    bgimage: { type: String, required: true },
    umrus: { type: String, required: true },
    umshakieb: { type: String, required: true },
    newsbg:{ type: String, required: true },
    contactbg:{ type: String, required: true },
    careerbg:{ type: String, required: true },
    
}, {
    timestamps: true
})
const homePageDataModel = model('HomePageData', homePageSchema)
export default homePageDataModel;