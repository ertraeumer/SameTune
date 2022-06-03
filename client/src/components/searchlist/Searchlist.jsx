import { useSelector } from 'react-redux';
import FilterSideBar from '../filterSideBar/FilterSideBar';
import InfoCard from '../infoCard/InfoCard';
import MusicianInfoCard from '../musicianInfoCard/MusicianInfoCard';
import styles from './Searchlist.module.css';

const Searchlist = ({ searchvalue }) => {
  const infoBands = useSelector(state => state.bands);
  const infoMusicians = useSelector(state => state.musicians).musiciansList.result;

  return (
    <div className={styles.container}>
      <FilterSideBar />
      <div className={styles.text}>Searchlist of {searchvalue}</div>
      <div className={styles.list}>
        {searchvalue === 'Bands' ? (
          infoBands.map((el) => <InfoCard key={el.id} band={el} />)
        ) : (
          infoMusicians.map((el) => <MusicianInfoCard key={el.id} person={el}/>))}
      </div>
    </div>
  );
}

export default Searchlist;
