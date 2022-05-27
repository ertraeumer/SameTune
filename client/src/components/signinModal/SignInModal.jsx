import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function MyVerticallyCenteredModal(props) {

  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  // const dispatch = useDispatch();

  const signInHandler = (e) => {
    e.preventDefault();
    props.onHide();

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Authorize to start jamming
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={passwordInputValue} onChange={e => setPasswordInputValue(e.target.value)} />
          </Form.Group>

          <Button type="submit" variant="dark" onClick={signInHandler}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}