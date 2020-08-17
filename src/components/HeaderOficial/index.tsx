import React from 'react';
// import { Link } from "gatsby"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../images/Roberto_Nascimento_logo.png';
import './styles.css';

const HeaderOficial: React.FC = () => {  
  return (
    <Container>
      <Row className="header" xs="12"> {/*Header*/}
        <img src={logo} alt="" className="header_img" />
        <Nav className="header_nav">
          <NavItem >
            {/* <Link to="/cursos">Cursos</Link> */}
            <NavLink className="header_nav_link" href="/ccursos">Curso</NavLink>
          </NavItem>
          <NavItem > 
            <NavLink className="header_nav_link" href="#">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="header_nav_link" href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="header_nav_link" disabled href="#">Contato</NavLink>
          </NavItem>
        </Nav>  
      </Row>  
    </Container>
  )
}

export default HeaderOficial;