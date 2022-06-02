import { Button, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './BandProfile.module.css';

const BandProfile = () => {

  const { id } = useParams();
  const band = useSelector(state => state.bands).filter((el) => (el.id === +id))[0];
  const joinGroupHandler = () => {

  };

  return (
    <div className={styles.profilePage}>
      <h1 className={styles.title}>{band.name} profile page</h1>
      <div className={styles.profileContainer}>
        <div className={styles.boxwithphotobutton}>
          <div className={styles.photo}>photo</div>
          <div><Button variant='dark' style={{ fontSize: '2rem' }} onClick={joinGroupHandler}>Join</Button></div>
        </div>
        <div className={styles.info}>
          <ListGroup>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              Location: {band['Location.name']}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              Instrument required: {band['Instruments.name']}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              Genre: {band['Genre.name']}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              About Us: {band.description}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              Participants: {/* Participants: {band.participants} */}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default BandProfile;
