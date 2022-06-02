import styles from './Profile.module.css';

const Profile = () => {

  

  return (
    <div className={styles.profilePage}>
      <div className={styles.title}>Profile page</div>
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
 
export default Profile;
