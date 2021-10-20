import React, {useEffect, useState} from 'react';
import { Button,Col, Container, Form, Row,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {editEmployeeAction, getEmployeeByIdAction} from "../actions/employeeAction";
import {InputChange, InputHandle} from "../utils/service";
import {RootState} from "../store";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

const Buttons=styled.button`
 width:100px;
 height:30px;
 background-color:black;
 
`


function EditEmployee ({match,history}:RouteComponentProps<any>){

    const user=match.params.id

    const [name,setName]=useState('')
    const [dateOfBirth,setDateOfBirth]=useState('')
    const [gender,setGender]=useState('')
    const [salary,setSalary]=useState('')


    const getEmployeeByIdReducer=useSelector<RootState,any>(state => state.getEmployeeByIdReducer)
    const {employee}=getEmployeeByIdReducer

    const employeeEditReducer=useSelector<RootState,any>(state => state.employeeEditReducer)
    const {errorEdit,editEmp}=employeeEditReducer
    const dispatch = useDispatch()

    useEffect(()=>{
        if (employee){

            if (employee._id===match.params.id){
                setName(employee._id)
                setDateOfBirth(employee.dateOfBirth)
                setGender(employee.gender)
                setSalary(employee.salary)
            }
           else {
                dispatch(getEmployeeByIdAction(match.params.id))
            }
        }
        else {
            dispatch(getEmployeeByIdAction(match.params.id))
        }


    },[dispatch,employee,user,match])

    const handleChange = (e:InputHandle) => {
        const target = e.target;
        if (target.checked) {
            setGender(target.value);
        }
    };

    const submitHandler = (e:InputChange) => {
        e.preventDefault()
        const updatedEmployee={
            _id:match.params.id,
            name:name,
            dateOfBirth:dateOfBirth,
            gender:gender,
            salary:salary
        }
        console.log(updatedEmployee)

        alert('Employee data is successfully Updated')

        dispatch(editEmployeeAction(updatedEmployee))
        history.push('/')
    }


    return (
        <div>

            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={9}>
                        <h3>Edit Employer</h3>
                        {match.params.id}
                        <Form onSubmit={submitHandler} className='justify-content-center my-lg-5 py-3'>
                            <input type="text" className='form-control'
                                   placeholder='Enter Name'
                                   value={name}
                                   onChange={(e)=>{setName(e.target.value)}}
                            />
                            <input type="date" className='form-control'
                                   placeholder='Date Of Birth'
                                   value={dateOfBirth}
                                   onChange={(e)=>{setDateOfBirth(e.target.value)}}
                            />
                            {/*<input type="text" className='form-control'*/}
                            {/*       placeholder='Enter Gender'*/}
                            {/*       value={gender}*/}
                            {/*       onChange={(e)=>{setGender(e.target.value)}}*/}
                            {/*/>*/}
                            <div className='form-control'>
                                <label>
                                    <input type="radio" value="male" checked={gender == 'male'}
                                           onChange={handleChange}    />
                                    <span>Male</span>
                                </label>
                                <label>
                                    <input type="radio" value="female" checked={gender == 'female'}
                                           onChange={handleChange} />
                                    <span>Female</span>
                                </label>
                            </div>
                            <input type="text" className='form-control'
                                   placeholder='Enter Salary'
                                   value={salary}
                                   onChange={(e)=>{setSalary(e.target.value)}}
                            />
                            <Button type='submit'>Edit</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}


export default EditEmployee;

