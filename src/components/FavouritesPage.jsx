import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { Link } from 'react-router-dom';

const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourite Jobs</h1>
          {favourites.length === 0 ? (
            <p>No favourites added yet.</p>
          ) : (
            favourites.map(jobData => (
              <Row key={jobData._id} className="mb-2">
                <Col xs={3}>
                  <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
                </Col>
                <Col xs={9}>
                  <a href={jobData.url} target="_blank" rel="noreferrer">
                    {jobData.title}
                  </a>
                </Col>
              </Row>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;