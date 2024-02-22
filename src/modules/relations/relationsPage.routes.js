import Router from 'express'
import * as relationsController from './relationsPageController.js'
import { fileUpload, fileValidation } from '../../utils/multer.js';
const relationsRouter = Router()

relationsRouter.route('/').post(fileUpload(fileValidation.image)
    .single('image', 1), relationsController.addrelationsPageData)
    .get(relationsController.getAllData)
relationsRouter.route('/:id').put(fileUpload(fileValidation.image)
.single('image'), relationsController.updateData)


export default relationsRouter;