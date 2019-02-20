import React from 'react';
import { Link } from 'gatsby';
import { Footer, FooterItem } from './styles/footer';

export default props => (
  <Footer>
    <FooterItem>¿Quieres <Link to='/patrocinar'>patrocinar</Link> este podcast?</FooterItem>
    <FooterItem>© {new Date().getFullYear()} Miquel Company, Sergio Susa, Berny Cantos</FooterItem>
    <FooterItem>Hecho con <a href="https://reactjs.org/">React</a>, <a href="https://www.gatsbyjs.org">Gatsby</a>. Hospedado en <a href="https://zeit.co/now">Now</a>. Codigo Fuente en <a href="https://github.com/todoestamal/site">Github</a></FooterItem>
  </Footer>
);
