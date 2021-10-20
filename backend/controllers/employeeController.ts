import mongoose from 'mongoose'

import {Request,Response} from "express";
import Employee from "../models/employee";
const  employeeController = {
    getEmployee: async (req: Request, res: Response) => {
        try {
            const getEmployees = await Employee.find()
            res.status(200).json(getEmployees)
        } catch (error: any) {
            res.status(404).json({message: error.message})
        }
    },

    createEmployee: async (req: Request, res: Response) => {
        const post = req.body
        const newPost = new Employee(post)
        try {
            await newPost.save()
            res.status(200).json(newPost)
        } catch (error: any) {
            res.status(409).json({message: error.message})
        }
    },

    getEmployeeById: async (req: Request, res: Response) => {
       // completely working fine
        const employee=await Employee.findOne({_id:req.params.id})
        if (employee){
            res.send(employee)
        }
        else {
            res.status(400)
            throw new Error('employee not found')
        }

    },

    updateEmployee: async (req: Request, res: Response) => {

        const editEmp = req.body;
        try {
            const employee = await Employee.findByIdAndUpdate({_id: editEmp._id})
            employee.name = editEmp.name
            employee.dateOfBirth = editEmp.dateOfBirth
            employee.gender = editEmp.gender
            employee.salary = editEmp.salary

            await employee.save()
            res.send('employee detail edited or updated')
        } catch (e) {
            return res.status(400).json({message: e})
        }


        // const employee=await Employee.findByIdAndUpdate(req.params.id)
        // if(employee){
        //     employee.name=req.body.name ||employee.name
        //     employee.dateOfBirth=req.body.dateOfBirth ||employee.dateOfBirth
        //     employee.gender=req.body.gender || employee.gender
        //     employee.salary=req.body.salary || employee.salary
        //
        //     const updateEmployee=await employee.save()
        //
        //     res.json({
        //         _id:updateEmployee._id,
        //         name:updateEmployee.name,
        //         dateOfBirth:updateEmployee.dateOfBirth,
        //         gender:updateEmployee.gender,
        //         salary:updateEmployee.salary
        //
        //     })
        // }
        // else {
        //     res.status(404)
        //     throw new Error('employee not found')
        // }


    },


    deleteEmployee : async (req: Request, res: Response) => {


        const employee = await Employee.findById(req.params.id)
        if (employee) {
            await employee.remove()
            res.json({message: 'Employee removed'})
        } else {
            res.status(404)
            throw new Error('employee not found')
        }
    },
}

export default employeeController;