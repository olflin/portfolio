import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/styles/Contact.css';


function Contact() {
      return (
        <Container className="my-5">
              <h1 className="text-center fw-bold mb-2 fs-1">Contact</h1>
              <p className="text-center mb-4">
                Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
              </p>
            <div className='section-contact border-bottom border-primary border-5 mb-4 pb-3'>
            </div>

          {/* Formulaire et Coordonnées */}
          <Row className="shadow rounded p-4 bg-white mt-5">
            {/* Formulaire */}
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold border-bottom border-primary border-3 mb-5 fs-1">Formulaire de contact</h2>
              <Form className=''>
                <Form.Control className="mb-2" type="text" placeholder="Votre nom" required/>
                <Form.Control className="mb-2" type="email" placeholder="Votre adresse email" required/>
                <Form.Control className="mb-2" type="tel" placeholder="Votre numéro de téléphone" required/>
                <Form.Control className="mb-2" type="text" placeholder="Sujet" required/>
                <Form.Control className="mb-3" as="textarea" rows={5} placeholder="Votre message" style={{ height: '500px' }} required/>
                <div className="text-center">
                  <Button variant="primary" type="submit">Envoyer</Button>
                </div>
              </Form>
            </Col>

            {/* Coordonnées */}
            <Col md={6}>
              <h2 className="fw-bold border-bottom border-primary border-3 mb-5 fs-1">Mes coordonnées</h2>
              <p className='fw-bold'>John Doe</p>
              <p><i className="bi bi-building"></i> 40 rue Laure Diebold</p>
              <p><i className="bi bi-geo-alt"></i> 69009 Lyon, France</p>
              <p><i className="bi bi-telephone"></i> 10 20 30 40 50</p>
              <p><i className="bi bi-envelope"></i> john.doe@gmail.com</p>

              {/* Google Maps iframe */}
              <div className="mt-3">
                <iframe
                  title="Localisation"
                  src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+Lyon&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0,  height: '500px'}}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
  );
}

export default Contact;