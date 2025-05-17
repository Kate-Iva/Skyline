import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendar2HeartFill } from 'react-icons/bs';
import { Col, Container, Row, Card, ListGroup, } from 'react-bootstrap';
import Search from './components/Search.jsx';
import AddAppointment from './components/AddAppointment.jsx';
import appointmentList from './data.json';
import AppointmentInfo from './components/AppointmentInfo.jsx';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-light mt-3 mb-3">
              <BsCalendar2HeartFill className="me-3" />
              Appointments
            </h1>
          </Col>
        </Row>

<Row className='justify-content-center'>
  <AddAppointment/>
</Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Search />
          </Col>
        </Row>

<Row className='justify-content-center'>
  <Col md={12}>

  <Card className="mb-3 p-0">
    <Card.Header>Appointments</Card.Header>
    <ListGroup variant="flash">
      {appointmentList.map(appointment => (
        <AppointmentInfo key={appointment.id} appointment={appointment}/>
      ))}
    </ListGroup>
  </Card>
    </Col>
</Row>
        
      </Container>
    </>
  );
}

export default App;
