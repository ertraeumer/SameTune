import styles from './InfoCard.module.css';

const InfoCard = (props) => {
  return (
    <div className={styles.infocardContainer}>
      <div className={styles.block}>фото</div>
      <div className={styles.block}>
        <div>название</div>
        <div>инструмент</div>
      </div>
      <div className={styles.block}>
        <div>место</div>
        <div>жанр</div>
      </div>
    </div>
  );
}
 
export default InfoCard;
