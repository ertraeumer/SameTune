import { useState } from 'react';
import MyVerticallyCenteredModal from '../signinModal/SignInModal';
import styles from './Homepage.module.css';

const Homepage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageWelcome}><h1 className={styles.h1}>Hi there and welcome to the SameTune!</h1><p>Here you've got an option to find a variety of musicians for your band or join one. Looking for a party? Right place you've gone to. Let's go?</p></div>
      <button className={styles.homepageButton} onClick={() => setModalShow(true)}>GET STARTED</button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
 
export default Homepage;
