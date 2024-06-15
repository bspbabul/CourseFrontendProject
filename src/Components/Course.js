import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from '../api/bootapi';
import { ToastContainer, toast } from 'react-toastify';

const Course = ({ course, update, deleteCourse }) => {
    const [editing, setEditing] = useState(false);
    const [editedCourse, setEditedCourse] = useState(course);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCourse({ ...editedCourse, [name]: value });
    };

    const handleUpdate = () => { 
        debugger
        axios.put(`${base_url}/courses`, editedCourse).then(
            (response) => {
                console.log(response.data);
                debugger
                toast.success("Course updated successfully");
                debugger
                setEditing(false);
                update(editedCourse);
            },
            (error) => {
                console.error(error);
                toast.error("Failed to update course");
            }
        );
    };

    const handleDeleteCourse = (id) => {
        debugger
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                debugger
                console.log(response.data,"from delete")
                toast.success("Course deleted");
                debugger
                deleteCourse(id);
            },
            (error) => {
                console.error(error); 
                toast.error("Failed to delete course");
            }
        );
    };

    return (
        <Card>
            <ToastContainer />
            <CardBody className='text-center'>
                {editing ? (
                    <>
                        <CardTitle>
                            <input type="text" name="title" value={editedCourse.title} onChange={handleInputChange} />
                        </CardTitle>
                        <CardText>
                            <textarea name="description" value={editedCourse.description} onChange={handleInputChange} />
                        </CardText>
                        <Container className='text-center mt-3'>
                            <Button color='success' className='ms-3' onClick={handleUpdate}>Update</Button>
                            <Button color='secondary' className='ms-3' onClick={() => setEditing(false)}>Cancel</Button>
                        </Container>
                    </>
                ) : (
                    <>
                        <CardTitle style={{ fontWeight: 'bold' }} className='mb-3'>{course.title}</CardTitle>
                        <CardText>{course.description}</CardText>
                        <Container className='text-center mt-3'>
                            <Button color='danger' className='ms-3 me-3' onClick={() => handleDeleteCourse(course.id)}>Delete</Button>
                            <Button color='warning' onClick={handleEdit}>Update</Button>
                        </Container>
                    </>
                )}
            </CardBody>
        </Card>
    );
};

export default Course;
