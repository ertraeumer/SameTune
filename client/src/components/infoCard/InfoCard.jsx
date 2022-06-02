import { useNavigate } from 'react-router-dom';
import styles from './InfoCard.module.css';

const InfoCard = ({ band }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.infocardContainer} onClick={() => navigate(`/band/${band.id}`)}>
      <div className={styles.block}>{band.photo}</div>
      <div className={styles.block}>
        <div>{band.name}</div>
        <div>{band['Instruments.name']}</div>
      </div>
      <div className={styles.block}>
        <div>{band['Location.name']}</div>
        <div>{band['Genre.name']}</div>
      </div>
    </div>
  );
}
 
export default InfoCard;
