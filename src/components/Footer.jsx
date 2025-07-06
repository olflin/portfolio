import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white ">
        <Container className="py-4">
            <Row>
          {/* Colonne 1 : Infos perso */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">John Doe</h5>
            <p className="text-light mb-1">40 rue Laure Diebold</p>
            <p className="text-light mb-1">69009 Lyon, France</p>
            <p className="text-light mb-1">10 20 30 40 50</p>
            <p className="text-light">john.doe@gmail.com</p>

            {/* Icônes sociales */}
            <div>
              <a href="https://github.com" className="me-3 text-secondary" target="_blank" rel="noopener noreferrer nofollow">
                <i className="footer-icon bi bi-github fs-4"></i>
              </a>
              <a href="https://twitter.com" className="me-3 text-secondary" target="_blank" rel="noopener noreferrer nofollow">
                <i className="footer-icon bi bi-twitter fs-4"></i>
              </a>
              <a href="https://linkedin.com" className="me-3 text-secondary" target="_blank" rel="noopener noreferrer nofollow">
                <i className="footer-icon bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </Col>

          {/* Colonne 2 : Liens utiles */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Liens utiles</h5>
            <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Accueil</a></li>
                <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
                <li><a href="/portfolio" className="text-white text-decoration-none">Portfolio</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Me contacter</a></li>
                <li><a href="/mentions" className="text-white text-decoration-none">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 : Dernières réalisations */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Réalisations récentes</h5>
            <ul className="list-unstyled">
                <li><a href="/portfolio" className="text-white text-decoration-none">Fresh Food</a></li>
                <li><a href="/portfolio" className="text-white text-decoration-none">Restaurant Akira</a></li>
                <li><a href="/portfolio" className="text-white text-decoration-none">Espace bien-être</a></li>
                <li><a href="/portfolio" className="text-white text-decoration-none">SEO</a></li>
                <li><a href="/portfolio" className="text-white text-decoration-none">Création d'une API</a></li>
                <li><a href="/portfolio" className="text-white text-decoration-none">Maquette d'un site</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;