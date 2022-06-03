import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBand } from '../../redux/thunk/createBand.thunk';
import styles from './NewBandForm.module.css';

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
    //   <div className={styles.newBandPage}>
    //     <h1 className={styles.title}>Create New Band</h1>
    //     <div className={styles.container}>
    //   <div className={styles.card}>
    //     <div className={styles.form}>
    //       <div>Name: <br></br><input type="text" value={name} onChange={(e) => setName(e.target.value)}/></div>
    //       <div>Description: <textarea cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea></div>
    //       <div>
    //         Location:
    //         <select value={location} onChange={(e) => setLocation(e.target.value)}>
    //           {info?.filter[2].map((el) => <option>{el.name}</option>)}
    //         </select>
    //       </div>
    //       <div>
    //         Genre:
    //         <select value={genre} onChange={(e) => setGenre(e.target.value)}>
    //           {info?.filter[0].map((el) => <option>{el.name}</option>)}
    //         </select>
    //       </div>
    //       <div>
    //         Instrument Needed:
    //         <select value={instrument} onChange={(e) => setInstrument(e.target.value)}>
    //           {info?.filter[1].map((el) => <option>{el.name}</option>)}
    //         </select>
    //       </div>
    //       <div></div>
    //       <div></div>
    //     </div>
    //     <Button variant='dark' style={{ fontSize: '1.5rem' }} onClick={submitHandler}>Submit</Button>
    //   </div>
    // </div>
    // </div>
<div className={styles.newBandPage} style={{textAlign: 'center'}}>
  <div className='container'>
  <h1 className={styles.title}>Create New Band</h1>
  <Form.Group className="mb-3" style={{width: '40%', margin: '0 auto'}}>
    <Form.Label>Band Name</Form.Label>
    <Form.Control placeholder="Band Name" enabled value={description} onChange={(e) => setDescription(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" style={{width: '40%', margin: '0 auto'}} controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" style={{width: '40%', margin: '0 auto'}}>
    <Form.Label>Location</Form.Label>
    <Form.Select enabled value={location} onChange={(e) => setLocation(e.target.value)}>
      {info?.filter[2].map((el) => <option>{el.name}</option>)}
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" style={{width: '40%', margin: '0 auto'}}>
    <Form.Label>Genre</Form.Label>
    <Form.Select enabled value={genre} onChange={(e) => setGenre(e.target.value)}>
      {info?.filter[0].map((el) => <option>{el.name}</option>)}
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" style={{width: '40%', margin: '0 auto'}}>
    <Form.Label>Instrument Needed</Form.Label>
    <Form.Select enabled value={instrument} onChange={(e) => setInstrument(e.target.value)}>
      {info?.filter[1].map((el) => <option>{el.name}</option>)}
    </Form.Select>
  </Form.Group>
  <Button variant='dark' style={{ fontSize: '1.5rem', marginTop: '30px'}} onClick={submitHandler}>Submit</Button>
  </div>
</div>
  );
}

export default NewBandForm;
