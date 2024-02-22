import Router from 'express'
import * as aboutUsPageController from './aboutPageController.js'
const aboutPageRouter = Router()
aboutPageRouter.route('/aboutuspagedata').post(aboutUsPageController.addAboutUsPagedata).get(aboutUsPageController.getAllData)
aboutPageRouter.route('/aboutuspagedata/:id').put(aboutUsPageController.updateData)
export default aboutPageRouter;