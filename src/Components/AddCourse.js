import React, { Fragment ,useEffect, useState} from 'react';
import { Form, FormGroup, Input ,Container,Button} from 'reactstrap';
import axios from "axios";
import base_url from '../api/bootapi';
import { ToastContainer, toast } from 'react-toastify';

const AddCourse = () => {
    useEffect(()=>{
        document.title="Add courses"
    },[])

    const [course,setCourses]=useState({});

    const handleform=(e)=>{
         console.log(course)
         postDatatoServer(course)
         
         e.preventDefault();
    }

    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response.data);
                console.log("success");
                toast.success("Courses added successfully"); 
                setCourses(response.data);
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("ERROR! Something went wrong"); 
            }
        );
    }

    return (
        <Fragment>
            <ToastContainer />
            <h1 className='text-center my-3'>Fill Course Details</h1>
            <Form onSubmit={handleform}>
                <FormGroup>
                    <label htmlFor="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId"
                    onChange={(e)=>{
                       setCourses({...course,id:e.target.value}) 
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title"
                    onChange={(e)=>{
                        setCourses({...course,title:e.target.value}) 
                     }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description" 
                    style={{
                       height:150
                    }}
                    onChange={(e)=>{
                        setCourses({...course,description:e.target.value}) 
                     }}
                     />
                </FormGroup>
                <Container className='text-center mt-3'>
                        <Button type="submit" color='success'className='ms-3 me-3'>Add Course</Button>
                        <Button type='reset' color='warning'>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;
