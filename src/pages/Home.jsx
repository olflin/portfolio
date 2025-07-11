import { useState } from 'react';
import { Button, Container, Row, Col, ProgressBar} from 'react-bootstrap';
import Modal from '../components/Modal';
import '../assets/styles/Home.css';
import Johndoe from '../assets/img/john-doe-about.jpg';


function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="hero mb-5 p-0 d-flex flex-column align-items-center">
      <Row className="justify-content-md-center w-100 mb-5">
        <Col md={12} className="text-center px-0 mb-4">
            <div className="hero-section">
              <div className="hero-overlay">
                <h1 className='text-light fs-0 mb-5'>Bonjour, je suis John Doe</h1>
                <h2 className='text-light mb-5'>Développeur Web full stack</h2>
                <Button variant="danger" onClick={handleOpen}>En savoir plus</Button>
              </div>
            </div>

            {/* Modale déclenchée */}
            <Modal show={showModal} handleClose={handleClose} />
        </Col>
      </Row>
      <Row className="justify-content-md-center section-competences mb-5 w-75 shadow">
        <Col md={6} className="mb-4 about-section">
          <h3 className="fw-bold border-bottom border-primary border-3 mb-3 pb-2">À propos</h3>
          <div>
            <img
              src={Johndoe}
              alt="Portrait"
              className="img-fluid mb-3"
            />
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus
              consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
              enim placeat? Natus, neque at?
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus
              consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
              enim placeat? Natus, neque at?
            </p>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus
              consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
              enim placeat? Natus, neque at?
            </p>
          </div>
        </Col>
        <Col md={6} className="mb-4 skills-section">
          <h3 className="fw-bold border-bottom border-primary border-3 mb-3 pb-2">Mes compétences</h3>
          <p>HTML5 90%</p>
          <ProgressBar now={90} variant="danger" className="mb-3" />
          <p>CSS3 80%</p>
          <ProgressBar now={80} variant="info" className="mb-3" />
          <p>JAVASCRIPT 70%</p>
          <ProgressBar now={70} variant="warning" className="mb-3" />
          <p>PHP 60%</p>
          <ProgressBar now={60} variant="success" className="mb-3" />
          <p>REACT 50%</p>
          <ProgressBar now={50} variant="primary" className="mb-3" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
