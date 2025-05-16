import { CardBody, Col, Card, Form, Row, Button} from 'react-bootstrap';

const AddAppointment = () => {
return(
    <>
    <Col md={12}>
    <Card className="mb-3 p-0">
<Card.Header>Add Appointment</Card.Header>
<CardBody>
    <Form>
        <Row className="mb-3">
<Form.Group as={Col}>
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name"></Form.Control>
</Form.Group>
<Form.Group as={Col}>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name"></Form.Control>
</Form.Group>
        </Row>
        <Form.Group as={Col} className="mb-3">
    <Form.Label>Appointment Date</Form.Label>
    <Form.Control type="text" placeholder="Appointment Date"></Form.Control>
</Form.Group>
<Form.Group as={Col} className="mb-3">
    <Form.Label>Appointment Time</Form.Label>
    <Form.Control type="text" placeholder="Appointment Time"></Form.Control>
</Form.Group>
<Form.Group as={Col} className="mb-3">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea"  placeholder="Comments"></Form.Control>
</Form.Group>
<Button variant="primary">Submit</Button>
    </Form>
</CardBody>
    </Card>
    </Col>
    </>
)
}

export default AddAppointment;