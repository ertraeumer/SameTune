import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SameTune</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Bands</Nav.Link>
              <Nav.Link href="#pricing">Musicians</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Notifications" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Invites</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Requests</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
