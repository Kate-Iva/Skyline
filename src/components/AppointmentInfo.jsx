import { ListGroup, Button } from 'react-bootstrap';
import { RiDeleteBin2Line } from "react-icons/ri";

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
    return (
        <>
        <ListGroup.Item className='p-2'>
           <p><small>Date: {appointment.aptDate}</small></p>
           <p><strong>First Name:</strong> {appointment.firstName}</p>
           <p><strong>Last Name:</strong> {appointment.lastName}</p>
           <p><strong>Notes:</strong> {appointment.aptNotes}</p>
           <Button onClick={() => onDeleteAppointment(appointment.id)} size="sm" variant="danger" className='d-flex align-items-center'>
           <RiDeleteBin2Line className='me-2'/>
            Delete </Button>
        </ListGroup.Item>
        </>
    )
}

export default AppointmentInfo;