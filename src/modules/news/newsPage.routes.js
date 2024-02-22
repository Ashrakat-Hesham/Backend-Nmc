import Router from 'express'
import * as newsPageController from './newsPageController.js'
import { fileUpload, fileValidation } from '../../utils/multer.js';
const newsPageRouter = Router()

newsPageRouter.route('/').post(newsPageController.addNews)
    .get(newsPageController.getNews)

newsPageRouter.route('/:id').put(newsPageController.updateNews)
    .get(newsPageController.getSpecificNews)



export default newsPageRouter;