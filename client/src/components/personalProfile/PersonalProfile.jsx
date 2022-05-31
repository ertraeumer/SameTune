import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/thunk/userActions.thunk';
import styles from './PersonalProfile.module.css';

const PersonalProfile = () => {

  const authUser = useSelector(state => state.authUser);

  const dispatch = useDispatch();

  const [editableName, setEditableName] = useState(false);
  const [name, setName] = useState('');

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
                  <div className={styles.content}><input value={name} onChange={(e) => setName(e.target.value)} /></div>
                  ) : (
                  <div className={styles.content}>{authUser?.name || 'No Information Provided'}</div>
                  )}
                </div>
                <div className={styles.edit} onClick={()=> {
                  editableName ? dispatch(editUser({ name })) : setEditableName(!editableName);
                }}>{editableName ? 'save' : 'edit'}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              Location: {authUser?.location || 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item>
              Instruments I Play: {authUser?.instruments[0] ? authUser.instruments.join(', ') : 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item>
              Preferable Genres: {authUser?.genres[0] ? authUser.genres.join(', ') : 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item>
              About Me: {authUser?.profile || 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item>
              Participation In Bands: {authUser?.groups[0] ? authUser.groups.join(', ') : 'No Information Provided'}
            </ListGroup.Item>
            <ListGroup.Item>
              Contacts: {authUser?.email} {authUser?.phone}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
