import Router from 'express'
const careerRouter = Router()
import * as careerController from './career.controller.js'
careerRouter.route('/')
.post(careerController.addCareerdata)
.get(careerController.getAllData)
.put(careerController.updateData)

careerRouter.route('/maindata')
.post(careerController.addMAinData)
.get(careerController.getMainData)
careerRouter.route('/maindata/:id')
.put(careerController.updateMainData)
export default careerRouter;