import { Helmet } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Mentions() {
  
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions légales</title>
      </Helmet>

  return (
    <div className='my-3 mx-5 d-flex flex-column align-items-center w-100'>
      <h1 className='mb-5 border-bottom border-primary border-5 text-center py-4 fw-bold fs-1'
       style= {{ width: '40%' }}>
        Mentions légales</h1>

      <Accordion className='w-75 my-3'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
              <p className='fw-bold fs-3'>John Doe</p>
              <p><i className="bi bi-building"></i> 40 rue Laure Diebold</p>
              <p><i className="bi bi-geo-alt"></i> 69009 Lyon, France</p>
              <p><i className="bi bi-telephone"></i> 10 20 30 40 50</p>
              <p><i className="bi bi-envelope"></i> john.doe@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
              <p className='fw-bold fs-3'>alwaysdata</p>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p><i class="bi bi-globe"></i><a href="www.alwaysdata.com"> www.alwaysdata.com</a></p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
              <p className='fw-bold fs-3'>Crédits</p>
              <p> Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr">Centre Européen de formation</a> </p>
              <p className='fst-italic'> Les images utilisées sur ce site sont libres de droits et on été obtenues sur le site <a href="https://pixabay.com">Pixabay</a></p>
              <p className='fst-italic'> La favicon de ce site a été fournie par <a href="https://www.flaticon.com">John doe Icons erstellt von Freepik-Flayicon</a></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Mentions;