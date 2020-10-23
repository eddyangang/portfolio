import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
export default function ContactForm() {


    return (
        <Form action="mailto:eddyyang@berkeley.edu" method="POST" enctype="text/plain">
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" required />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" name="subject" required/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" name="Message" required/>
                <Form.Text className="text-muted">
                Send a private email to me.
                Or email me at: eddyyang@berkeley.edu
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" value="Send">
                Submit
            </Button>

            <Button variant="danger" className="mx-2" type="reset" value="Reset">
                Clear
            </Button>
</Form>
    )
}
