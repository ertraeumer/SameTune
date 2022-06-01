import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBand } from '../../redux/thunk/createBand.thunk';
import s from './NewBandForm.module.css';

const NewBandForm = () => {

  const info = useSelector(state => state.filterData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');
  const [instrument, setInstrument] = useState('');

  const submitHandler = () => {
    dispatch(createBand(name, description, location, genre, instrument));
    navigate('/profile');
  };

  return (
    <div className={s.container}>
      <div className={s.title}>Create new Band</div>
      <div className={s.card}>
        <div className={s.form}>
          <div>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></div>
          <div>Description: <textarea cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea></div>
          <div>
            Location:
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              {info?.filter[2].map((el) => <option>{el.name}</option>)}
            </select>
          </div>
          <div>
            Genre:
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {info?.filter[0].map((el) => <option>{el.name}</option>)}
            </select>
          </div>
          <div>
            Instrument needed:
            <select value={instrument} onChange={(e) => setInstrument(e.target.value)}>
              {info?.filter[1].map((el) => <option>{el.name}</option>)}
            </select>
          </div>
          <div></div>
          <div></div>
        </div>
        <Button variant='dark' style={{ fontSize: '1.5rem' }} onClick={submitHandler}>Submit</Button>
      </div>
    </div>
  );
}

export default NewBandForm;
