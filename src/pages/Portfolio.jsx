import { Container, Row, Col } from 'react-bootstrap';
import CardProject from '../components/CardProject';
import FreshFood from '../assets/img/portfolio/fresh-food.jpg'
import Akira from '../assets/img/portfolio/restaurant-japonais.jpg'
import BienEtre from '../assets/img/portfolio/espace-bien-etre.jpg'
import Seo from '../assets/img/portfolio/seo.jpg'
import Api from '../assets/img/portfolio/coder.jpg'
import Maquette from '../assets/img/portfolio/screens.jpg'



const projects = [
  {
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    imageSrc: FreshFood,
    projectLink: 'https://github.com/johndoe/fresh-food',
    sources: 'Site réalisé avec PHP et MySQL',
  },
  {
  title: 'Restaurant Akira',
  description: 'Site de vente de produits frais en ligne',
  imageSrc: Akira,
  projectLink: 'https://github.com/johndoe/fresh-food',
  sources: 'Site réalisé avec WordPress',
  },
  {
  title: 'Espace bien-être',
  description: 'Site de vente de produits frais en ligne',
  imageSrc: BienEtre,
  projectLink: 'https://github.com/johndoe/fresh-food',
  sources: 'Site réalisé avec LARAVEL',
  },
  {
  title: 'SEO',
  description: 'Amélioration du référencement d\'un site e-commerce',
  imageSrc: Seo,
  projectLink: 'https://github.com/johndoe/fresh-food',
  sources: 'Utilisation des outils SEO',
  },
  {
  title: 'Création d\'une API',
  description: 'Création d\'une API RESTFULL publique',
  imageSrc: Api,
  projectLink: 'https://github.com/johndoe/fresh-food',
  sources: 'PHP - SYMFONY',
  },
  {
  title: 'Maquette d\'un site web',
  description: 'Création du prototype d\'un site',
  imageSrc: Maquette,
  projectLink: 'https://github.com/johndoe/fresh-food',
  sources: 'Réalisé avec FIGMA',
  }
];

function Portfolio() {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Réalisations</h2>
      <Row className="g-4">
        {projects.map((p, i) => (
          <Col key={i} xs={12} md={6} lg={4}>
            <CardProject {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
