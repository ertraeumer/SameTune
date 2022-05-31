import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterDataThunk } from '../../redux/thunk/getFilterData.thunk';
import styles from './FilterSideBar.module.css';

const FilterSideBar = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterDataThunk());
  }, [])

  const info = useSelector(state => state.filterData);

  const optionsGenre = info.filter[0];
  const optionsInstrument = info.filter[1];
  const optionsLocation = info.filter[2];

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.mleft}>
        <h1>Location</h1>
        <div>
          <select>
            <option></option>
            {optionsLocation?.sort().map(el => <option>{el.name}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.mleft}>
        <h1>Instrument</h1>
        <div>
          <select>
            <option></option>
            {optionsInstrument?.map(el => <option>{el.name}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.mleft}>
        <h1>Genre</h1>
        <div>
          <select>
            <option></option>
            {optionsGenre?.map(el => <option>{el.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
