import Router from 'express'
import * as goldPricePageController from './goldPricePageController.js'
const goldPricePageRouter = Router()
goldPricePageRouter.route('/goldpriceperounce')
    .post(goldPricePageController.addgoldPricePageData)
    .get(goldPricePageController.getAllData)
export default goldPricePageRouter;