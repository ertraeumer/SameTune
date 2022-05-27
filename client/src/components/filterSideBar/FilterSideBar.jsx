import styles from './FilterSideBar.module.css';

const FilterSideBar = () => {

  // dispatch get location values
  // dispatch get intruments values
  // dispatch get genres values
  const options = ['bla', 'blabla', 'blablabla'];

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.mleft}>
        <h1>Location</h1>
        <div>
          <select>
            {options.map(el => <option>{el}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.mleft}>
        <h1>Instrument</h1>
        <div>
          <select>
            <option value="">blaljkbljlkm</option>
            <option value="">bla</option>
            <option value="">bla</option>
          </select>
        </div>
      </div>
      <div className={styles.mleft}>
        <h1>Genre</h1>
        <div>
          <select>
            <option value="">blaljkbljlkm</option>
            <option value="">bla</option>
            <option value="">bla</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
