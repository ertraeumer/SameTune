import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBandsListThunk } from '../../redux/thunk/getbandsList.thunk';
import styles from './FilterSideBar.module.css';

const FilterSideBar = () => {

  const info = useSelector(state => state.filterData);
  const dispatch = useDispatch();

  const optionsGenre = info.filter[0];
  const optionsInstrument = info.filter[1];
  const optionsLocation = info.filter[2];

  const [location, setLocation] = useState('');
  const [instrument, setInstrument] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    dispatch(getBandsListThunk(genre, location, instrument));
  }, [location, instrument, genre]);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.mleft}>
        <h1>Location</h1>
        <div>
          <select value={location} onChange={(e) => {
              setLocation(e.target.value);
              console.log(location);
          }}>
            <option></option>
            {optionsLocation?.map(el => <option>{el.name}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.mleft}>
        <h1>Instrument</h1>
        <div>
          <select value={instrument} onChange={(e) => setInstrument(e.target.value)}>
            <option></option>
            {optionsInstrument?.map(el => <option>{el.name}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.mleft}>
        <h1>Genre</h1>
        <div>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option></option>
            {optionsGenre?.map(el => <option>{el.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
