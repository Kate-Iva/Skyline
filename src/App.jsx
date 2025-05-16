import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendar2HeartFill } from "react-icons/bs";
import { Button, Col, Container, Row } from 'react-bootstrap';
function App() {

  return (
    <>
    <Container>
      <Row>
        <Col md={3}>
        <h3>Hello Bootstrap!</h3>
        </Col>
        <Col md={3}>
        <h3>Hello Bootstrap!</h3>
        </Col>
        <Col md={3}>
        <h3>Hello Bootstrap!</h3>
        </Col>
      </Row>
    </Container>
      <h1>
        <BsCalendar2HeartFill />
        Appointments</h1>
        <Button>Hello!</Button>
    </>
  )
}

export default App
