import { model, Schema, Types } from 'mongoose';


const projectsPageSchema = new Schema({
    UMELRUS: { type: String, required: true },
    UmShakaieb: { type: String, required: true },
    umRuusIntro: { type: String, required: true },
    NubianMiningCompany: { type: String, required: true },
    ProjectUmRuusOverview: { type: String, required: true },
    ProjectUmRuusOverviewDetails: { type: String, required: true },
    ExpenditureUmRuus: { type: String, required: true },
    ExpenditureDetailsUmRuus: { type: String, required: true },
    ExpenditureDetailsUmSahkieb: { type: String, required: true },
    geologyumshakieb: { type: String, required: true },
    geologyumshakiebdetails: { type: String, required: true },
    DiamondDrillingActivitiesUmRuus: { type: String, required: true },
    DiamondDrillingActivitiesDetailsUmRuus: { type: String, required: true },
    RCDrillingActivitiesUmRuus: { type: String, required: true },
    RCDrillingActivitiesDetailsUmRuus: { type: String, required: true },
    SamplingActivitiesUmRuus: { type: String, required: true },
    SamplingActivitiesDetailsUmRuus: { type: String, required: true },
    LaboratoryAnalysisUmRuus: { type: String, required: true },
    LaboratoryAnalysisDetailsUmRuus: { type: String, required: true },
    UmShakiebIntro: { type: String, required: true },
    ProjectUmShakiebOverview: { type: String, required: true },
    ProjectUmShakiebOverviewDetails: { type: String, required: true },
    RCDrillingActivitiesUmShakieb: { type: String, required: true },
    RCDrillingActivitiesDetailsUmShakieb: { type: String, required: true },
    SamplingActivitiesUmShakieb: { type: String, required: true },
    SamplingActivitiesDetailsUmShakieb: { type: String, required: true },
    LaboratoryAnalysisUmShakieb: { type: String, required: true },
    LaboratoryAnalysisDetailsUmShakieb: { type: String, required: true },
    InfrastructureandConstructions: { type: String, required: true },
    InfrastructureandConstructionsdetails: { type: String, required: true },
    Zoningtheconcession: { type: String, required: true },
    ZoningTheConcessionIntro: { type: String, required: true },
    ZoningTheConcessionDetails: { type: String, required: true },
    GoldMineralizationStylesDetails: { type: String, required: true },
    GoldMineralizationStyles: { type: String, required: true },
    PhasesOfExplorationAtTheConcessionAreaDetails: { type: String, required: true },
    PhasesOfExplorationAtTheConcessionArea: { type: String, required: true },
    CoreYard: { type: String, required: true },
    coreYardSteps: { type: String, required: true },
    CoreYardDetails: { type: String, required: true },
    Trench: { type: String, required: true },
    TrenchDetails: { type: String, required: true },
    RCDrilling: { type: String, required: true },
    RCDrillingDetails: { type: String, required: true },
    DiamondDrilling: { type: String, required: true },
    DiamondDrillingDetails: { type: String, required: true },
    MappingAndSampling: { type: String, required: true },
    MappingAndSamplingDetails: { type: String, required: true },
    nextTargetForUmruus: { type: String, required: true },
    nextTargetForUmruusDetails: { type: String, required: true },
    coreyard: [{ type: String, required: true }],
    gold: [{ type: String, required: true }],
    trench: [{ type: String, required: true }],
    infrastructure:[ { type: String, required: true }],
    mappingandsampeling:[{ type: String, required: true }],
    dd:{ type: String, required: true },
    rc:{ type: String, required: true },
    umshakiebgeology: [{ type: String, required: true }]
}, {
    timestamps: true
})

const projectsDataModel = model('projectsPageData', projectsPageSchema)

export default projectsDataModel;


