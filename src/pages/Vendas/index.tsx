import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../images/Roberto_Nascimento_logo.png';
 
import Header from '../../components/HeaderOficial';

import './styles.css';

const Vendas: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Row className="main">
        <h1 className="main_name">Roberto Santos Nascimneto</h1>
        <img src={logo} alt="" className="main_logo" /> 
        <h1 className="main_adv">Advogado Trabalhista</h1>
      </Row>
    </Container>
  ) 
}
 
export default Vendas;