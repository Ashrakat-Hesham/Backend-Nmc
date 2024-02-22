import Router from 'express'
import * as employeesController from './employees.controller.js'
import { fileUpload, fileValidation } from '../../utils/multer.js';
const employeesRouter = Router();
employeesRouter.route('/').post(fileUpload(fileValidation.image)
    .single('image'), employeesController.addEmployees);

employeesRouter.route('/:id')
    .get(employeesController.getSpecificUser)
    .put(fileUpload(fileValidation.image)
        .single('image'), employeesController.updateEmployeeImg);





export default employeesRouter;