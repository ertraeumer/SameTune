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
    <h1 className={styles.title}>{band.name} Profile page</h1>
    <div className={styles.profileContainer}>
      <div className={styles.boxwithphotobutton}>
        <div className={styles.photo}>photo</div>
        <div></div>
      </div>
      <div className={styles.info}>
        <ListGroup >
          <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                <div className={styles.prop}><b>Genre:</b></div>
                <div className={styles.propInfo}>{band['Genre.name']}</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                <div className={styles.prop}><b>Location:</b></div>
                <div className={styles.propInfo}>{band['Location.name']}</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                <div className={styles.prop}><b>Instrument Required:</b></div>
                <div className={styles.propInfo}>{band['Instruments.name']}</div> 
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                <div className={styles.prop}><b>About Us:</b></div>
                <div className={styles.propInfo}>{band.description}</div> 
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                <div className={styles.prop}><b>Participants:</b></div>
                <div className={styles.propInfo}>{band.participants}</div> 
            </div>
          </ListGroup.Item>
        </ListGroup>
        <div style={{textAlign: 'center'}}><Button variant='dark' style={{ fontSize: '2rem', margin: '50px 0'}} onClick={() => console.log('123')}>Join The Band</Button></div>
      </div>
    </div>
  </div>
  );
}

export default BandProfile;
