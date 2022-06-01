import FilterSideBar from '../filterSideBar/FilterSideBar';
import InfoCard from '../infoCard/InfoCard';
import styles from './Searchlist.module.css';

const Searchlist = ({ searchvalue }) => {
  return (
    <div className={styles.searchlistContainer}>
      <FilterSideBar />
      <div className={styles.text}>Searchlist of {searchvalue}</div>
      <div className={styles.searchline}><input className={styles.input} type="text" placeholder='Looking for someone exact?'/></div>
      <div className={styles.list}>
        <InfoCard />
      </div>
    </div>
  );
}
 
export default Searchlist;
