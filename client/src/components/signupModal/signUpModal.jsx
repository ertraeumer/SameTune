import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function MyVerticallyCenteredModal2(props) {

  const [emailInputValue2, setEmailInputValue2] = useState('');
  const [passwordInputValue2, setPasswordInputValue2] = useState('');

  const signUpHandler = (e) => {
    e.preventDefault();
    props.onHide();
    
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ width: '30%', marginLeft: '33%'}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Roll into the club
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={emailInputValue2} onChange={e => setEmailInputValue2(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={passwordInputValue2} onChange={e => setPasswordInputValue2(e.target.value)} />
          </Form.Group>

          <Button type="submit" variant="dark" onClick={signUpHandler}>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
