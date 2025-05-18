import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendar2HeartFill } from 'react-icons/bs';
import { Col, Container, Row, Card, ListGroup, } from 'react-bootstrap';
import Search from './components/Search.jsx';
import AddAppointment from './components/AddAppointment.jsx';
import AppointmentInfo from './components/AppointmentInfo.jsx';
import { useCallback, useEffect, useState } from 'react';

function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("firstName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    }
  ).slice().sort((a, b) => {
    const aField = a[sortBy].toLowerCase();
    const bField = b[sortBy].toLowerCase();
    let order = (orderBy === "asc") ? 1 : -1;
    if (aField < bField) return -1 * order;
    if (aField > bField) return 1 * order;
    return 0;
  });
  

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
          <Col md={12}>
            <Search 
            query={query} 
            onQueryChange={myQuery => setQuery(myQuery)}
            orderBy={orderBy}
            onOrderByChange={mySort => setOrderBy(mySort)}
            sortBy={sortBy}
            onSortByChange={mySort => setSortBy(mySort)}/>
          </Col>
        </Row>

<Row className='justify-content-center'>
  <Col md={12}>

  <Card className="mb-3 p-0">
    <Card.Header>Appointments</Card.Header>
    <ListGroup variant="flash text-start">
      {filteredAppointments.map(appointment => (
        <AppointmentInfo key={appointment.id} appointment={appointment}
        onDeleteAppointment={appointmentId => setAppointmentList(appointmentList.filter(
          appointment => appointment.id !== appointmentId
        ))
      } />
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
