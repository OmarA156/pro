 import {Navbar, Nav, Container} from 'react-bootstrap';
 import { FaShoppingCart , FaUser} from 'react-icons/fa';
 const Header = () => {
  return (
    <header >
      <Navbar expand="lg" variant="dark"  bg="dark"  collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="#login">
                <FaUser /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
