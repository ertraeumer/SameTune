import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/thunk/userActions.thunk';
import MyVerticallyCenteredModal from '../signinModal/SignInModal';
import MyVerticallyCenteredModal2 from '../signupModal/signUpModal';
import styles from './Header.module.css';

const Header = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authUser } = useSelector(state => state);

  return (
    <div className={styles.headerContainer}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ padding: 0, height: '100%'}}>
        <Container>
          <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => navigate('/')}>SameTune</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/bands')}>Bands</Nav.Link>
              <Nav.Link onClick={() => navigate('/musicians')}>Musicians</Nav.Link>
            </Nav>
            { authUser ? (
              <Nav>
                <NavDropdown title="Notifications" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Invites</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Requests</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={() => navigate(`/profile`)}>Profile</Nav.Link>
                {authUser ? (<Nav.Link onClick={() => dispatch(signOut())}>Sign Out</Nav.Link>) : (true)}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link onClick={() => setModalShow(true)}>Sign In</Nav.Link>
                <Nav.Link onClick={() => setModal2Show(true)}>Sign Up</Nav.Link>
              </Nav>
            )}
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => {
                setModalShow(false);
              }}
              togglesignup={() => {
                setModalShow(false);
                setModal2Show(true);
              }}
              noAccountButton="notVisible"
            />
            <MyVerticallyCenteredModal2
              show={modal2Show}
              onHide={() => setModal2Show(false)}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
