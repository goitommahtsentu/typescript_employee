import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Row, Table,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteEmployeeAction, employeeListAction} from "../actions/employeeAction";
import {RootState} from "../store";
import styled from "styled-components";

export const StyledHeader=styled.thead`
background-color:#ebfbff;
padding:40px 0;
&:hover{
background-color:black
}
`
function ListEmployee() {
    const dispatch = useDispatch()
    const employeeListReducer = useSelector<RootState,any>
    (state => state.employeeListReducer)
    const {loading, error, employees} = employeeListReducer

    const deleteEmployeeReducer = useSelector<RootState,any>(state => state.deleteEmployeeReducer)
    const {success} = deleteEmployeeReducer

    useEffect(() => {
       dispatch(employeeListAction())
    }, [dispatch,])


    const deleteEmployeeHandler=(id:any)=>{
        console.log('delete')
     dispatch(deleteEmployeeAction(id))
    }

    return (
        <Container>
            {error}
            <Row className='justify-content-md-center'>
                <Col xs={12} md={9}>
                <Table striped bordered hover>
                    <StyledHeader>
                    <tr>
                        <th>#</th>
                        <th>full Name</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                    </StyledHeader>

                    {employees.map((emp: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; dateOfBirth: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; gender: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; salary: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; _id: any; }) => (
                        <tbody key={emp._id}>
                        <tr>
                            <td></td>
                            <td>{emp.name}</td>
                            <td>{emp.dateOfBirth}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.salary} birr</td>
                            <td>
                                <Link to={`/edit/${emp._id}`} className='btn btn-light my-1'>
                                    <i className='fas fa-edit'>Edit</i>
                                </Link></td>
                            <td>
                                <Button className='btn-danger' type='submit'
                                        onClick={()=>dispatch(deleteEmployeeAction(emp._id))} >
                                    <i className='fas fa-delete-left'></i>Delete</Button>
                            </td>

                        </tr>
                        </tbody>
                    ))}
                </Table>
                <Link to='/add' className='btn btn-light my-3'>
                    Add new Employee
                </Link>

                </Col>
            </Row>
        </Container>
    );
}

export default ListEmployee;