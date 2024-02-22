import { model, Schema } from 'mongoose';


const NavbarPageSchema = new Schema({
    navbarTabs: { type: String, required: true },
}, {
    timestamps: true
})

const NavbarTabsModel = model('Navbar Tabs', NavbarPageSchema)

export default NavbarTabsModel;