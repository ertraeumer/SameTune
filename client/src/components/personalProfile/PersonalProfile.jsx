import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addInstrument } from '../../redux/thunk/instruments.thunk';
import { editUser, getUserFromServer } from '../../redux/thunk/userActions.thunk';
import styles from './PersonalProfile.module.css';

const PersonalProfile = () => {

  const authUser = useSelector(state => state.authUser);
  const info = useSelector(state => state.filterData);

  const dispatch = useDispatch();

  const [editableName, setEditableName] = useState(false);
  const [name, setName] = useState('');

  const [editableLocation, setEditableLocation] = useState(false);
  const [location, setLocation] = useState('');

  const [editableInstruments, setEditableInstruments] = useState(false);
  const [instrumentToAdd, setInstrumentToAdd] = useState('');

  const changeNameHandler = () => {
    if (editableName) {
      dispatch(editUser({ name }));
    }
    setEditableName(!editableName);
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
        <div className={styles.photo}>photo</div>
        <div className={styles.info}>
          <ListGroup>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}>Name:</div>
                <div>
                  {editableName ?
                    (
                      <div className={styles.content}><input value={name} onChange={(e) => setName(e.target.value)} placeholder={authUser?.name} /></div>
                    ) : (
                      <div className={styles.content}>{authUser?.name || 'No Information Provided'}</div>
                    )}
                </div>
                <div className={styles.edit} onClick={changeNameHandler}>{editableName ? 'save' : 'edit'}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}>Location:</div>
                <div>
                  {editableLocation ?
                    (
                      <div className={styles.content}>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} >
                          <option key='first'></option>
                          {info.filter[2].map((el) => {
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
                <div className={styles.prop}>Instruments I Play:</div>
                <div>
                  <ul style={{ marginRight: '3rem' }}>
                    {authUser?.instruments[0] ? authUser?.instruments.map((el) => <li key={Math.trunc(Math.random() * 1000)}>{el}</li>) : 'No information provided'}
                    {editableInstruments ? (
                      <li>
                        { instrumentToAdd ? (
                          <select style={{ width: '7.6rem'}} value={instrumentToAdd} onChange={(e) => setInstrumentToAdd(e.target.value)}>
                            <option value='' disabled hidden>Выбор</option>
                            {info.filter[1].map((el) => {
                              if (authUser.instruments.indexOf(el.name) === -1) return <option key={el.id}>{el.name}</option>
                            })}
                          </select>
                        ) : (
                          <select style={{ width: '7.6rem'}} value={''} onChange={(e) => setInstrumentToAdd(e.target.value)}>
                            <option value='' disabled hidden>Выбор</option>
                            {info.filter[1].map((el) => {
                              if (authUser.instruments.indexOf(el.name) === -1) return <option key={el.id}>{el.name}</option>
                            })}
                          </select>
                        )}
                      </li>
                    ) : (<div></div>)}
                  </ul>
                </div>
                <div className={styles.edit} onClick={() => addInstrumentHandler(instrumentToAdd)}>add</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}></div>
                <div></div>
                <div className={styles.edit}></div>
              </div>
              Preferable Genres: {authUser?.genres[0] ? authUser.genres.join(', ') : 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}></div>
                <div></div>
                <div className={styles.edit}></div>
              </div>
              About Me: {authUser?.profile || 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}></div>
                <div></div>
                <div className={styles.edit}></div>
              </div>
              My Bands: {authUser?.groups[0] ? authUser.groups.join(', ') : 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                <div className={styles.prop}></div>
                <div></div>
                <div className={styles.edit}></div>
              </div>
              Contacts: {authUser?.email} {authUser?.phone}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
