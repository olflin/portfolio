import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Mentions() {
  useEffect(() => {
    // Ajouter les meta tags pour bloquer l'indexation
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    // Nettoyage lors du démontage du composant
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className='my-5 mx-5 d-flex flex-column align-items-center w-100'>
      <h1 className='my-5 border-bottom border-primary border-5 text-center py-4 fw-bold'
       style= {{ width: '40%' }}>
        Mentions légales</h1>

      <Accordion className='w-75'>
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
              <p> Ce site a été réalisé par John Doe, étudiant au <a href="#">Centre Européen de formation</a> </p>
              <p className='fst-italic'> Les images utilisées sur ce site sont libres de droits et on été obtenues sur le site <a href="#">Pixabay</a></p>
              <p className='fst-italic'> La favicon de ce site a été fournie par <a href="#">John doe Icons erstellt von Freepik-Flayicon</a></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Mentions;