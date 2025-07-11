import { Container, Row, Col } from 'react-bootstrap';
import CardService from '../components/CardService';

import Banner from '../assets/img/banner.jpg';



const services = [
  {
    icon: 'bi-brush',
    title: 'UX Design',
    description:
      "L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations. L’objectif est de rendre l’expérience utilisateur la plus fluide et agréable possible.",
  },
  {
    icon: 'bi-code-slash',
    title: 'Développement web',
    description:
      "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
  },
  {
    icon: 'bi-search',
    title: 'Référencement',
    description:
      "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L’objectif est d’attirer un maximum de visiteurs qualifiés sur le site.",
  },
];

function Services() {
  return (
    <div>
      <img 
        src= {Banner}
        alt="Bannière"
        className="img-fluid w-100"
        style={{ maxHeight: '250px', objectFit: 'cover' }}
      />

      <Container className="my-5">
        <h1 className="text-center fw-bold fs-1">Mon offre de services</h1>
        <p className="text-center mb-4">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div
          className="boderSevice border-bottom border-primary border-5 mb-5 pb-3 w-50 mx-auto"
        ></div>

        <Row className="g-4 my-3">
          {services.map((service, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <CardService {...service} />
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  );
}

export default Services;
