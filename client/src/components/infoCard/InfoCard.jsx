import { useNavigate } from 'react-router-dom';
import styles from './InfoCard.module.css';
import { Card } from 'react-bootstrap';

const InfoCard = ({ band }) => {

  const navigate = useNavigate();

  return (
      <Card onClick={() => navigate(`/band/${band.id}`)} bg="dark" text="white" style={{cursor: 'pointer', width: '70rem', marginBottom: '30px', flexDirection: 'unset'}}>
        <Card.Img style={{maxWidth: "300px"}} variant="left" src="https://vanyaland.com/wp-content/uploads/2017/05/Rock-Cats.jpg" />
        <Card.Body style={{marginLeft: '20px'}}>
          <Card.Title style={{fontSize: '30px'}}>{band.name}</Card.Title>
          <Card.Text>
            <b>Instrument:</b> {band['Instruments.name']}
          </Card.Text>
          <Card.Text>
           <b>Genre:</b> {band['Genre.name']}
          </Card.Text>
          <Card.Text>
            <b>Location:</b> {band['Location.name']}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
 
export default InfoCard;
