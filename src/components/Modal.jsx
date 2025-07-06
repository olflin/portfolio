import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function GitHubModal({ show, handleClose }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
<Modal show={show} onHide={handleClose} centered dialogClassName="modal-dark">

      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container className="py-4">
            <Row>
                {loading ? (
                  <Col className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Chargement...</span>
                    </div>
                  </Col>
                ) : error ? (
                  <Col className="text-center">
                    <div className="alert alert-danger" role="alert">
                      <strong>Erreur :</strong> {error}
                    </div>
                  </Col>
                ) : userData ? (
                  <>
                    <Col md={6} className="text-center">
                        <div className="text-center">
                          <img
                            src={userData.avatar_url}
                            alt={`Avatar de ${userData.login}`}
                            width="100"
                            className="mb-3 rounded-circle"
                          />
                        </div>
                    </Col>
                    <Col md={6} className="text-center">
                        <div className="text-start mx-auto" style={{ maxWidth: "300px" }}>
                          <p><strong>Nom d’utilisateur :</strong> {userData.login}</p>
                          <p><strong>Bio :</strong> {userData.bio || "Aucune biographie"}</p>
                          <p><strong>Repos publics :</strong> {userData.public_repos}</p>
                          <p><strong>Suiveurs :</strong> {userData.followers}</p>
                          <a
                            href={userData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                          >
                            Voir le profil complet
                          </a>
                        </div>
                    </Col>
                  </>
                ) : (
                  <Col className="text-center">
                    <p>Aucune donnée disponible</p>
                  </Col>
                )}
            </Row>

        </Container>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GitHubModal;
