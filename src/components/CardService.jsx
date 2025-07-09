import { Card } from 'react-bootstrap';
import '../assets/styles/CardService.css';

function CardService({ icon, title, description }) {
  return (
    <Card className="card-service text-center h-100 shadow-sm border">
      <Card.Body>
        <div className="icon-wrapper mb-3">
          <i className={`bi ${icon} fs-1 text-primary`}></i>
        </div>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardService;
