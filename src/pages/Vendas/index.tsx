import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../images/Roberto_Nascimento_logo.png';
 
import Header from '../../components/HeaderOficial';
import Footer from '../../components/FooterOficial';

import './styles.css';

const Vendas: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Row className="main">
        <div className="main_name">
          <h1 className="main_name_h1">Roberto Santos Nascimneto</h1>
          <h2 className="main_oab">OAB n° 12234234</h2>
        </div>
        <div className="main_logo">
          <img src={logo} alt="" className="main_logo_img" /> 
          <h2 className="main_trab">Advogado Trabalhista</h2>
        </div>
      </Row>
      <Footer></Footer>
      

    </Container>
  ) 
}
 
export default Vendas;