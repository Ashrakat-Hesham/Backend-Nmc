import Router from 'express'
import * as contactPageController from './contactPageController.js'
const contactPageRouter = Router()

contactPageRouter.route('/contactpagedata')
    .post(contactPageController.addcontactPagedata)
    .get(contactPageController.getAllData)
contactPageRouter.route('/contactpagedata/:id').put(contactPageController.updateData)


export default contactPageRouter;