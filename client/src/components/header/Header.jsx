import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

  const navigate = useNavigate();

  // useSelector current user id

  return (
    <div className={styles.headerContainer}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => navigate('/')}>SameTune</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/bands')}>Bands</Nav.Link>
              <Nav.Link onClick={() => navigate('/musicians')}>Musicians</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Notifications" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Invites</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Requests</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => navigate(`/profile/${1}`)}>Profile</Nav.Link> (// TO DO!!!!!!!!!!!!)
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
