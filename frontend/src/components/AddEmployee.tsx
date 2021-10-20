import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FormProps} from "../types/types";
import {InputChange, InputHandle} from "../utils/service";
import {createEmployeeAction} from "../actions/employeeAction";




const AddEmployee:React.FC<FormProps>=()=> {
    const [name,setName]=useState('')
    const [dateOfBirth,setDateOfBirth]=useState('')
    const [gender,setGender]=useState('')
    const [salary,setSalary]=useState('')


    // const createEmployeeReducer=useSelector(state => state.createEmployeeReducer)
    // const {success,loading,error}=createEmployeeReducer
    const dispatch=useDispatch()



    const submitHandler = (e:InputChange) => {
        e.preventDefault()
        const addNewEmp={
            name:name,
            dateOfBirth:dateOfBirth,
            gender:gender,
            salary:salary
        }
        console.log(addNewEmp)
        dispatch(createEmployeeAction(addNewEmp))
        alert('Employee data is successfully added')
        console.log(name)
    }
    const handleChange = (e:InputHandle) => {
        const target = e.target;
        if (target.checked) {
            setGender(target.value);
        }
    };

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={9}>
                    <h3>Add New Employer</h3>

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
                        <div>
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

                        <Button type='submit' className='p-3 m-3'> Add new</Button>
                    </Form>
                    <Link to='/'>Back To List</Link>
                </Col>
            </Row>

        </Container>
    );
}

export default AddEmployee;