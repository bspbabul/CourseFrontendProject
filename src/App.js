import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddCourse from './Components/AddCourse';
import AllCourses from './Components/AllCourses';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer /> {/* Render ToastContainer once */}
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/add-course' element={<AddCourse />} exact />
                <Route path='/view-courses' element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
