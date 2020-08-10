import React from 'react';
import { Link } from "gatsby"
import { FiInstagram, FiAlertCircle } from 'react-icons/fi';

import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import sete from '../../images/logosetesete.png';
import './styles.css';

const FooterOficial: React.FC = () => {  
  return (
    <Container>
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

export default FooterOficial;