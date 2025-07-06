import { useState } from 'react';
import { Button } from 'react-bootstrap';
import GitHubModal from '../components/Modal';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>John Doe</h1>
        <h2>Développeur Web en formation</h2>
        <Button variant="primary" onClick={handleOpen}>
          En savoir plus
        </Button>
      </div>

      {/* Modale déclenchée */}
      <GitHubModal show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Home;
