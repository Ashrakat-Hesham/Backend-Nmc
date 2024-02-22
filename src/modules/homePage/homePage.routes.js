import Router from 'express'
import * as homePageController from './homePageController.js'
const homePageRouter = Router()
homePageRouter.route('/homepagedata').post(homePageController.addHomePagedata).get(homePageController.getAllData)
homePageRouter.route('/homepagedata/:id').put(homePageController.updateData)
homePageRouter.route('/homepagedata/:id').delete(homePageController.deleteData)




export default homePageRouter;