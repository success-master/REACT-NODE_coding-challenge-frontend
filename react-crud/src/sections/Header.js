import React, { useState } from 'react';
import {
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
            </Container>
        </Navbar>
    </div>
  );
}

export default Header;