import express from 'express'
import employeeController from "../controllers/employeeController";
const router=express.Router()



router.get('/',employeeController.getEmployee)
router.post('/add',employeeController.createEmployee)
router.get('/:id',employeeController.getEmployeeById)
router.post('/:id',employeeController.updateEmployee)
router.delete(`/delete/:id`,employeeController.deleteEmployee)


export default router