import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { deleteEvent } from '../../redux/actions/events';

import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteEvent = (props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEvent(props.event.eventId));
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Confirm your action: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are going to delete {props.event.title}</p>
        </Modal.Body>
        <Modal.Footer>
          <Form onSubmit={handleDelete}>
            <Button type="submit"> Confirm </Button>{" "}
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteEvent;