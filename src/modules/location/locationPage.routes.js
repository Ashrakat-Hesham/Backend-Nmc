import Router from 'express'
import * as locationController from './locationPageController.js'
const locationPageRouter = Router()
locationPageRouter.route('/')
    .post(locationController.addlocationPageData)
    .get(locationController.getAllData)
export default locationPageRouter;