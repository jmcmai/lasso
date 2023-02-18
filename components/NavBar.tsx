import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <Navbar fixed="top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">Stanford</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <NavDropdown title="People">
              <NavDropdown.Item as={Link} href="/team">Meet the Team!</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/attributions">Attributions</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/collaborations">Collaborations</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
