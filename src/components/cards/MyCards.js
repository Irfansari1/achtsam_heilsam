import { Row, Col, Container } from "react-bootstrap";
import MyCard from "../cards/MyCard";

const MyCards = ({ data }) => {
  return (
    <Container className="text-center mt-4 height:500px">
      <Row className="d-flex justify-content-center">
        {data.map((myData) => {
          return (
            <Col
              key={myData.id}
              className="mb-3 d-flex justify-content-center"
              xs={12}
              md={6}
              lg={4}
            >
              <MyCard myData={myData} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MyCards;
