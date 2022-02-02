import { Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const MyCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { text, name, imageurl, link } = props.myData;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageurl} style={{ height: "11rem" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {location === "Startseite" ? (
          <Button
            style={{ background: "#1273DE" }}
            onClick={() => navigate(`/${link}`)}
          >
            Details
          </Button>
        ) : (
          <Button
            variant="outline-primary"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Details
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MyCard;
