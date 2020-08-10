import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { 
    FiFacebook, FiInstagram, FiAlertCircle, FiYoutube,  
  } from 'react-icons/fi'
import { Link } from "gatsby"

import logo from '../../images/Roberto_Nascimento_logo.png';
import sete from '../../images/logosetesete.png';
 
import Header from '../../components/HeaderOficial';

import './styles.css';

const Vendas: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Row className="main">
        <div className="main_name">
          <h1 className="main_name_h1">Roberto Santos Nascimneto</h1>
          <h2 className="main_oab">OAB n° 12234234</h2>
          {/* <h3 className="main_adv">Advogado Trabalhista</h3> */}
        </div>
        <div className="main_logo">
          <img src={logo} alt="" className="main_logo_img" /> 
          <h2 className="main_trab">Advogado Trabalhista</h2>
        </div>
      </Row>

      <Row className="footer">
        <div className="footer_sociais">
          <Link 
            className="footer_icone_a" 
            to="https://www.instagram.com/77digitalmarketing/" 
            target="_blank"
          >
              <FiInstagram />
              <strong className="footer_icone_strong">Instagram</strong>
          </Link>
          <Link 
            className="footer_icone_a" 
            to='https://open.spotify.com/show/3KDFyeYOq2qAmmtIUHRluQ?si=ydGcPiAuQrSpMe3Pz2R31A' 
            target='_blank'
          >
              <span><FiAlertCircle /></span>
              <strong className="footer_icone_strong">Spotify</strong>
          </Link>
        </div>
        
        <div className="footer_logo">
          <Link 
            className="footer_icone_a" 
            to='https://77digitalmarketing.com/' 
            target='_blank'
          >  
            <img src={sete} alt="logo setesete" className="footer_img" /> 
          </Link>
        </div>
        <div className="footer_privacidade">
          <Link 
            className="footer_icone_a" 
            to='/privacidade' 
            target='_blank'
          >
              <strong className="footer_icone_strong">Privacidade e Cookies</strong>
          </Link>
        </div>
      </Row>

    </Container>
  ) 
}
 
export default Vendas;