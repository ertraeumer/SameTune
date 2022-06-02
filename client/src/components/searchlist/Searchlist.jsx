import { useSelector } from 'react-redux';
import FilterSideBar from '../filterSideBar/FilterSideBar';
import InfoCard from '../infoCard/InfoCard';
import styles from './Searchlist.module.css';

const Searchlist = ({ searchvalue }) => {

  const infoBands = useSelector(state => state.bands);
  const infoMusicians = useSelector(state => state.musicians);

  return (
    <div className={styles.searchlistContainer}>
      <FilterSideBar />
      <div className={styles.text}>Searchlist of {searchvalue}</div>
      <div className={styles.searchline}><input className={styles.input} type="text" placeholder='Looking for someone exact?'/></div>
      <div className={styles.list}>
        {searchvalue === 'Bands' ? (infoBands.map((el) => <InfoCard band={el}/>)) : (false)}
      </div>
    </div>
  );
}
 
export default Searchlist;
