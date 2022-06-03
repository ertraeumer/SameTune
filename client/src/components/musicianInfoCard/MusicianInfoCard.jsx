import { useNavigate } from "react-router-dom";
import styles from './MusicianInfoCard.module.css';
import { Card } from 'react-bootstrap';

const MusicianInfoCard = ({ person }) => {

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/profile/${person.id}`)} bg="dark" text="white" style={{cursor: 'pointer', width: '70rem', marginBottom: '30px', flexDirection: 'unset'}}>
        <Card.Img style={{maxWidth: "300px"}} variant="left" src="https://www.meme-arsenal.com/memes/38f3cb4b83f04a1ba6cfa700ce9a8603.jpg" />
        <Card.Body style={{marginLeft: '20px'}}>
          <Card.Title style={{fontSize: '30px'}}>{person.name}</Card.Title>
          <Card.Text>
            <b>Instruments:</b> {person.instruments.map((el) => <li key={el.id}>{el}</li>)}
          </Card.Text>
          <Card.Text>
           <b>Genre:</b> {person.genre}
          </Card.Text>
          <Card.Text>
            <b>Location:</b> {person.location}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default MusicianInfoCard;
