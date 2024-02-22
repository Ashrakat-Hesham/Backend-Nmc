import { model, Schema } from 'mongoose';
const EmployeesSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    blood: { type: String, required: true },
    employeeId: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true, RegExp: /^[01][0-1-2-5][0-9]{8}$/ },
    companyName: { type: String, required: true },
    image: { secure_url: String, public_id: String },
    validatethru: { type: String, required: true },
}, {
    timestamps: true
})
const employeesModel = model('EmployeesData', EmployeesSchema)
export default employeesModel;

