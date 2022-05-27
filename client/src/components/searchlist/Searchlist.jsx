import FilterSideBar from '../filterSideBar/FilterSideBar';
import styles from './Searchlist.module.css';

const Searchlist = ({ searchvalue }) => {
  return (
    <div className={styles.searchlistContainer}>
      <FilterSideBar searchvalue={searchvalue}/>
      <div className={styles.searchline}></div>
      <div className={styles.list}></div>
    </div>
  );
}
 
export default Searchlist;
