import { useNavigate } from "react-router-dom";
import styles from './MusicianInfoCard.module.css';

const MusicianInfoCard = ({ person }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.infocardContainer} onClick={() => navigate(`/profile/${person.id}`)}>
      <div className={styles.block}>{person.photo}</div>
      <div className={styles.block}>
        <div>{person.name}</div>
        <div>
          <ul>
            {person.instruments.map((el) => <li key={el.id}>{el}</li>)}
          </ul>
        </div>
      </div>
      <div className={styles.block}>
        <div>{person.location}</div>
        <div>{person.genre}</div>
      </div>
    </div>
  );
}

export default MusicianInfoCard;
