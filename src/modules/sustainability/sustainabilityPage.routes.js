import Router from 'express'
import * as sustainabilityPageController from './sustainabilityPageController.js'
const sustainabilityPageRouter = Router()
sustainabilityPageRouter.route('/sustainabilitypagedata')
    .post(sustainabilityPageController.addsustainabilityPagedata)
sustainabilityPageRouter.route('/sustainabilitypagedata')
    .get(sustainabilityPageController.getAllData)

export default sustainabilityPageRouter;