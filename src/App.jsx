import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendar2HeartFill } from 'react-icons/bs';
import { Col, Container, Row } from 'react-bootstrap';
import Search from './components/Search.jsx';
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

        <Row className="justify-content-center">
          <Col md={4}>
            <Search />
          </Col>
        </Row>

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
          <Col md={3}>
            <h3>Hello Bootstrap!</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
