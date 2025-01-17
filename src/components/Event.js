import React, {useEffect, useState} from "react";
import { Form, Button, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";


export function Event() {

  const mainEvent = useSelector(state => state.eventReducer.mainEvent)
  const allTags = mainEvent.allEventTags;
  const parentTags = mainEvent.eventTags;
    

  useEffect(() => {
      console.log('values', mainEvent)
  }, []);


  const handleInputChange = (e) => {

  }

  const handleEdit = () => {
    
  }
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      handleEdit();
    }
    setValidated(true);
  };


  return (
    <div marginBottom="30">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group>
          <Form.Label> Title: </Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="title"
            label="title"
            value={mainEvent.title}
            onChange={handleInputChange}
            maxLength={30}
            required
            disabled
          />
          <Form.Text muted>
            The title must be no more than 30 characters long. Choose a short
            and succinct name that accurately reflects the essence of the event.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            This field can't be empty.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> Start Date: </Form.Label>
            <Form.Control
              size="sm"
              type="date"
              name="startDate"
              label="start Date"
              value={mainEvent.startDate}
              onChange={handleInputChange}
              required
              disabled
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label> Start Time: </Form.Label>
            <Form.Control
              size="sm"
              type="time"
              name="startTime"
              value={mainEvent.startTime}
              label="start Time"
              onChange={handleInputChange}
              required
              disabled
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> End Date: </Form.Label>
            <Form.Control
              size="sm"
              type="date"
              name="endDate"
              label="end Date"
              value={mainEvent.endDate}
              onChange={handleInputChange}
              required
              disabled
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label> End Time: </Form.Label>
            <Form.Control
              size="sm"
              type="time"
              name="endTime"
              value={mainEvent.endTime}
              label="end Time"
              onChange={handleInputChange}
              required
              disabled
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row className="align-items-left">
          <Form.Group>
            <Col xs="auto">
              <Form.Label> All Tags: </Form.Label>
              {
              allTags && allTags.map((tag, index) => (
                <div key={index} className="mb-3" style={{ marginLeft: 20 }}>
                  <Form.Check
                    type="checkbox"
                    label={tag}
                  />
                </div>
              ))}
            </Col>
          </Form.Group>
          <Form.Group>
            <Col xs="auto">
              <Form.Label> Selected Common Tags: </Form.Label>
              {parentTags && parentTags.map((tag, index) => (
                <div key={index} className="mb-3" style={{ marginLeft: 20 }}>
                  <Form.Check
                    disabled
                    checked
                    type="checkbox"
                    label={tag}
                  />
                </div>
              ))}
            </Col>
          </Form.Group>
        </Form.Row>
        <Button variant="outline-primary" size="sm">
          {" "}
          Select as a common tag{" "}
        </Button>{" "}
        <Button variant="outline-primary" size="sm">
          {" "}
          Add new tag{" "}
        </Button>
      </Form>
    </div>
  );
}