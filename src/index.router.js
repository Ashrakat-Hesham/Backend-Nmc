import connectDB from '../DB/connection.js'
import NavbarTabsRouter from './modules/NavbarTabs/NavbarTabs.routes.js'
import aboutPageRouter from './modules/aboutUs/aboutPage.routes.js'
import careerRouter from './modules/career/career.routes.js'
import contactPageRouter from './modules/contact/contactPage.routes.js'
import employeesRouter from './modules/employees/employees.routes.js'
import goldPricePageRouter from './modules/gold price/goldPricePage.routes.js'
import homePageRouter from './modules/homePage/homePage.routes.js'
import locationPageRouter from './modules/location/locationPage.routes.js'
import newsPageRouter from './modules/news/newsPage.routes.js'
import projectPageRouter from './modules/projects/projectPage.routes.js'
import relationsRouter from './modules/relations/relationsPage.routes.js'
import sustainabilityPageRouter from './modules/sustainability/sustainabilityPage.routes.js'
import { globalErrorHandling } from './utils/errorHandling.js'
const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    //Setup API Routing 
    app.use(`/homepage`, homePageRouter)
    app.use(`/aboutpage`, aboutPageRouter)
    app.use(`/projectpage`, projectPageRouter)
    app.use(`/sustainabilitypage`, sustainabilityPageRouter)
    app.use(`/newspage`, newsPageRouter)
    app.use(`/contactpage`, contactPageRouter)
    app.use(`/goldprice`, goldPricePageRouter)
    app.use(`/location`, locationPageRouter)
    app.use(`/employees`, employeesRouter)
    app.use(`/career`, careerRouter)
    app.use(`/navbar`, NavbarTabsRouter)
    app.use(`/relations`, relationsRouter)
    app.all('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    app.use(globalErrorHandling)
    connectDB()
}
export default initApp