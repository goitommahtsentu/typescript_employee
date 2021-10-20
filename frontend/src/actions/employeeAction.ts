import {
    CREATE_EMPLOYEE_FAIL,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS, LIST_EMPLOYEE_FAIL,
    LIST_EMPLOYEE_REQUEST, LIST_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAIL, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS
} from "../constants/constants";
import axios from "axios";
export const createEmployeeAction=(employee:any)=>async (dispatch:any)=>{
    try {
        dispatch({
            type:CREATE_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.post('/api/employee/add',employee)
        dispatch({
            type:CREATE_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:CREATE_EMPLOYEE_FAIL,
            payload:error
        })
    }
}

export const employeeListAction=()=>async (dispatch:any)=>{
    try {
        dispatch({
            type:LIST_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.get('/api/employee')
        dispatch({
            type:LIST_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:LIST_EMPLOYEE_FAIL,
            payload:error
        })
    }
}
export const getEmployeeByIdAction=(id:any)=>async (dispatch:any)=>{
    try {
        dispatch({
            type:UPDATE_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.get(`/api/employee/${id}`,id)
        console.log(data)
        dispatch({
            type:UPDATE_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:UPDATE_EMPLOYEE_FAIL,
            payload:error
        })
    }
}
export const editEmployeeAction= (updateEmp:any )=>async (dispatch:any)=>{
    try {
        dispatch({
            type:UPDATE_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.post(`/api/employee/${updateEmp._id}`,updateEmp)
        console.log(data)
        dispatch({
            type:UPDATE_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:UPDATE_EMPLOYEE_FAIL,
            payload:error
        })
    }
}

export const deleteEmployeeAction=(id:any)=>async (dispatch:any)=>{
    try {

        const response=await axios.delete(`/api/employee/delete/${id}`)
        alert('deleted successfully')

        console.log(response)
        window.location.reload()

    }catch (error) {

        alert("something went wrong")
        console.error(error)

    }
}
