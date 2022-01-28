import { Row, Col, Container } from "react-bootstrap";
import MyCard from "./MyCard";

const Angebote = ({ data }) => {
  return (
    <Container className="text-center mt-4 height:500px">
      <Row className="d-flex justify-content-center">
        {data.map((angebot) => {
          return (
            <Col
              key={angebot.id}
              className="mb-3 d-flex justify-content-center"
              xs={12}
              md={6}
              lg={4}
            >
              <MyCard angebot={angebot} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Angebote;
