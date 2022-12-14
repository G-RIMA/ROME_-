import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React from 'react';
import './Contact.css';
import { FormGroup } from 'react-bootstrap';

function Contact() {
  return (
    <section className='contact'>
        <div className='container'>
            <div className='row'>
                <Form>
                    <h2>Contact Us:</h2>
                    <FormGroup className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                    </FormGroup>
                </Form>
            </div>
        </div>
        
    </section>
  );
}

export default Contact;