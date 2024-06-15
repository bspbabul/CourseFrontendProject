
import React, { useEffect, useState } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const AllCourses = () => {
    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromServer(); // Call once when component mounts
    }, [])

    const [courses, setCourses] = useState([]);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses have been loaded");
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong"); // Display error toast
            }
        );
    }

    const updateCourse = (updatedCourse) => {
        const updatedCourses = courses.map(course => {
            if (course.id === updatedCourse.id) {
                return updatedCourse;
            }
            return course;
        });
        setCourses(updatedCourses);
    };

    const deleteCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))
    }

    return (
        <div>
            <ToastContainer /> {/* To display toasts */}
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length > 0 ? courses.map((item, index) => (
                    <Course key={index} course={item} update={updateCourse} deleteCourse={deleteCourse} />
                )) : "No courses"
            }
            
        </div>
    );
};

export default AllCourses;
