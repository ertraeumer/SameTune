import { useSelector } from 'react-redux';
import FilterSideBar from '../filterSideBar/FilterSideBar';
import InfoCard from '../infoCard/InfoCard';
import MusicianInfoCard from '../musicianInfoCard/MusicianInfoCard';
import styles from './Searchlist.module.css';

const Searchlist = ({ searchvalue }) => {

  const infoBands = useSelector(state => state.bands);
  const infoMusicians = useSelector(state => state.musicians);
  console.log(infoMusicians);

  return (
    <div className={styles.searchlistContainer}>
      <FilterSideBar />
      <div className={styles.text}>Searchlist of {searchvalue}</div>
      <div className={styles.searchline}><input className={styles.input} type="text" placeholder='Looking for someone exact?' /></div>
      <div className={styles.list}>
        {searchvalue === 'Bands' ? (
          infoBands.map((el) => <InfoCard key={el.id} band={el} />)
        ) : (
          infoMusicians.map((el) => <MusicianInfoCard />))}
      </div>
    </div>
  );
}

export default Searchlist;
