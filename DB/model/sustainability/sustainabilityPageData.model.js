import { model, Schema, Types } from 'mongoose';


const sustainabilityPageSchema = new Schema({
    ourpeople: { type: String, required: true },
    ourpeopleDetails: { type: String, required: true },

    diversityAndInclusion: { type: String, required: true },
    diversityAndInclusionDetails: { type: String, required: true },

    healthAndSafety: { type: String, required: true },

    SafetyIsOurPriority: { type: String, required: true },
    SafetyIsOurPriorityDetails: { type: String, required: true },

    OurHSEPolicy: { type: String, required: true },
    OurHSEPolicyDetails: { type: String, required: true },
    
    EmployeesHealthandSafety: { type: String, required: true },
    EmployeesPriority: { type: String, required: true },

    employeesDetails: { type: String, required: true },
    EnvironmentalProtection: { type: String, required: true },

    EnvPriority: { type: String, required: true },
    EnvironmentalDetails: { type: String, required: true },

    EnvironmentalResponsibility: { type: String, required: true },
    EnvironmentalStewardship: { type: String, required: true },

    EnvironmentalResponsibilityDetails: { type: String, required: true },

    Social: { type: String, required: true },
    SocialAndEconomicDevelopment: { type: String, required: true },

    OurSocialConduct: { type: String, required: true },
    Ourbusinesscanplayanimportant: { type: String, required: true },

    SocialEconomicDetails: { type: String, required: true },
    Governance: { type: String, required: true },
    GovernanceDetails: { type: String, required: true },
    bgimage:[{ type: String, required: true }],
    hseimage:[{ type: String, required: true }]
}, {
    timestamps: true
})

const sustainabilityDataModel = model('sustainabilityPageData', sustainabilityPageSchema)

export default sustainabilityDataModel;














