import { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addInstrument } from '../../redux/thunk/instruments.thunk';
import { editUser } from '../../redux/thunk/userActions.thunk';
import styles from './PersonalProfile.module.css';

const PersonalProfile = () => {

  const authUser = useSelector(state => state.authUser);
  const info = useSelector(state => state.filterData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editableName, setEditableName] = useState(false);
  const [name, setName] = useState('');

  const [editableLocation, setEditableLocation] = useState(false);
  const [location, setLocation] = useState('');

  const [editableInstruments, setEditableInstruments] = useState(false);
  const [instrumentToAdd, setInstrumentToAdd] = useState('');

  const [editableGenre, setEditableGenre] = useState(false);
  const [genre, setGenre] = useState('');

  const changeNameHandler = () => {
    if (editableName) {
      dispatch(editUser({ name }));
    }
    setEditableName(!editableName);
  };

  const editGenreHandler = () => {
    if (editableGenre) {
      dispatch(editUser({ genres: genre }));
    }
    setEditableGenre(!editableGenre);
  };

  const changeLocationHandler = () => {
    if (editableLocation) {
      dispatch(editUser({ location }));
    }
    setEditableLocation(!editableLocation);
  };

  const addInstrumentHandler = (instrument) => {
    if (editableInstruments) {
      dispatch(addInstrument(instrument));
    }
    setEditableInstruments(!editableInstruments);
    setInstrumentToAdd('');
  };

  return (
    <div className={styles.profilePage}>
      <h1 className={styles.title}>Personal profile page</h1>
      <div className={styles.profileContainer}>
        <div className={styles.boxwithphotobutton}>
          <div className={styles.photo}>photo</div>
          <div><Button variant='dark' style={{ fontSize: '2rem' }} onClick={() => (console.log('Add Photo'))}>Add Photo</Button></div>
        </div>
        <div className={styles.info}>
          <ListGroup >
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>Name:</b></div>
                <div className={styles.propInfo}>
                  {editableName ?
                    (
                      <input value={name} onChange={(e) => setName(e.target.value)} placeholder={authUser?.name} />
                    ) : (
                      authUser?.name || 'No Information Provided'
                    )}
                </div>
                <div className={styles.edit} onClick={changeNameHandler}>{editableName ? 'save' : 'edit'}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>Location:</b></div>
                <div className={styles.propInfo}>
                  {editableLocation ?
                    (
                      <div className={styles.content}>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} >
                          <option key='first'></option>
                          {info?.filter[2].map((el) => {
                            if (el.name !== authUser.location) return <option key={el.id}>{el.name}</option>
                          })}
                        </select>
                      </div>
                    ) : (
                      <div className={styles.content}>{authUser?.location || 'No Information Provided'}</div>
                    )}
                </div>
                <div className={styles.edit} onClick={changeLocationHandler}>{editableLocation ? 'save' : 'edit'}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>Instruments I Play:</b></div>
                <div className={styles.propInfo}>
                  {authUser?.instruments ? authUser?.instruments.map((el, i) => ((authUser.instruments.length - 1) === i ? (<span key={Math.trunc(Math.random() * 1000)}>{el}</span>) : (<span key={Math.trunc(Math.random() * 1000)}>{el}, </span>))) : 'No Information Provided'}
                  {editableInstruments ? (
                    <span>
                      {instrumentToAdd ? (
                        <select style={{ width: '7.6rem', marginRight: 0 }} value={instrumentToAdd} onChange={(e) => setInstrumentToAdd(e.target.value)}>
                          <option value='' disabled hidden>??????????</option>
                          {info?.filter[1].map((el) => {
                            if (true) return <option key={el.id}>{el.name}</option>
                          })}
                        </select>
                      ) : (
                        <select style={{ width: '7.6rem' }} value={''} onChange={(e) => setInstrumentToAdd(e.target.value)}>
                          <option value='' disabled hidden>??????????</option>
                          {info?.filter[1].map((el) => {
                            if (true) return <option key={el.id}>{el.name}</option>
                          })}
                        </select>
                      )}
                    </span>
                  ) : (<div></div>)}
                </div>
                <div className={styles.edit} onClick={() => addInstrumentHandler(instrumentToAdd)}>add</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>Genre:</b></div>
                <div className={styles.propInfo}>
                  {editableGenre ?
                    (
                      <div className={styles.content}>
                        <select value={genre} onChange={(e) => setGenre(e.target.value)} >
                          <option key='first'></option>
                          {info?.filter[0].map((el) => {
                            if (el.name !== authUser.genres[0]) return <option key={el.id}>{el.name}</option>
                          })}
                        </select>
                      </div>
                    ) : (
                      <div className={styles.content}>{(authUser?.genres && authUser.genres[0] !== null) ? authUser.genres[0] : 'No Information Provided'}</div>
                    )}
                </div>
                <div className={styles.edit} onClick={editGenreHandler}>{editableGenre ? 'save' : 'edit'}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>About Me:</b></div>
                <div className={styles.propInfo}>{authUser?.profile || 'No Information Provided'}</div>
                <div className={styles.edit}>edit</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>My Bands:</b></div>
                <div className={styles.propInfo}>{(authUser?.groups && authUser.groups[0] !== null) ? authUser.groups.map((el) => <div style={{ cursor: 'pointer' }} key={el.id} onClick={() => navigate(`/band/${el.id}`)}>{el.name}</div>) : 'No Information Provided'}</div>
                <div className={styles.edit}></div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}><b>Contacts:</b></div>
                <div className={styles.propInfo}>
                  <div>{authUser?.email}</div>
                  <div>phone: {authUser?.phone}</div>
                  <div className={styles.edit}>edit</div>
                </div>
                <div className={styles.edit}></div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div style={{ textAlign: 'center' }}><Button variant='dark' style={{ fontSize: '2rem', margin: '50px 0' }} onClick={() => navigate('/newband')}>Create Band</Button></div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
