import {
  Button,
  Card,
} from "react-bootstrap";

const Cardsfilms = (props)=> {
	return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>{props.films}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Klik Disini</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardsfilms;
