import { Card, Button } from 'react-bootstrap';
import '../assets/styles/CardProject.css';


function CardProject({ title, description, imageSrc, projectLink, sources }) {
  return (
    <Card className="card-project text-center">
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className='fs-4 fw-bold'>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Button
          className="button-project mt-auto"
          variant="primary"
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le site
        </Button>
      </Card.Body>
        <Card.Footer className="text-muted">
          <small>{sources}</small>
        </Card.Footer>
    </Card>
  );
}

export default CardProject;