import Router from 'express'
import * as projectPageController from './projectPageController.js'
import { fileUpload, fileValidation } from '../../utils/multer.js';
const projectPageRouter = Router()

projectPageRouter.route('/projectpagedata').post(projectPageController.addprojectPagedata).get(projectPageController.getAllData)
projectPageRouter.route('/projectpagedata/:id').put(projectPageController.updateData)

export default projectPageRouter;