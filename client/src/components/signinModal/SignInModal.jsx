import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/thunk/userActions.thunk';


export default function MyVerticallyCenteredModal({ onHide, togglesignup, show }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }, navigate));
    onHide();
  }

  const openSignUpHandler = (e) => {
    togglesignup();
  }

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ width: '30%', marginLeft: '33%' }}
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
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Button type="submit" variant="dark" onClick={signInHandler}>
            Sign In
          </Button>
          <div style={{ marginTop: '3%', cursor: 'pointer' }} onClick={openSignUpHandler}>No account yet? Click here</div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
