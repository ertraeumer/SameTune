import { useSelector } from 'react-redux';
import styles from './PersonalProfile.module.css';

const PersonalProfile = () => {

  const { name, email, phone, profile, location } = useSelector(state => state.authUser);
  return (
    <div className={styles.profilePage}>
      <h1 className={styles.title}>Personal profile page</h1>
      <div className={styles.profileContainer}>
        <div className={styles.photo}>photo</div>
        <div className={styles.info}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
 
export default PersonalProfile;
