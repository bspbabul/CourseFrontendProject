import React,{useEffect} from 'react';
import { Container, CardSubtitle, Button, Card, CardBody, CardTitle } from 'reactstrap'; // Importing from reactstrap

const Home = () => {
    useEffect(()=>{
        document.title="Home"
    },[])

    return (
        <div className='border-white p-3' style={{background:"#E8E8E8"}}>
            <Container className='border-black'>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle tag="h5" className="display-3">Learncode with Babul</CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted font-weight-bold w-100"
                            tag="h6"
                        > This is developed by Learncode with Babul for learning backed is on spring boot and frontend on react js
                        </CardSubtitle>

                        <Button color='primary'>Start Using</Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Home;
