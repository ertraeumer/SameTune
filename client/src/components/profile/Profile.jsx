import { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMusicianThunk } from '../../redux/thunk/getMusician.thunk';
import styles from './Profile.module.css';

const Profile = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusicianThunk(id));
  }, []);

  const userInfo = useSelector(state => state.musician);

  return (
    // <div className={styles.profilePage}>
    //   <div className={styles.title}>{userInfo.name} Profile page</div>
    //   <div className={styles.profileContainer}>
    //     <div className={styles.photo}>photo {userInfo.photo}</div>
    //     <div className={styles.info}>
    //       <div>location {userInfo.location}</div>
    //       <div>name {userInfo.name}</div>
    //       <div>genres {userInfo.genres}</div>
    //       <div>groups {userInfo.groups}</div>
    //       <div>profile {userInfo.profile}</div>
    //       <div>instruments {userInfo.instruments}</div>
    //       <div>contacts</div>
    //       <div>mail {userInfo.email || 'no info'}</div>
    //       <div>phone {userInfo.phone || 'no info'}</div>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.profilePage}>
      <h1 className={styles.title}>{userInfo.name} Profile Page</h1>
      <div className={styles.profileContainer}>
        <div className={styles.boxwithphotobutton}>
          <div className={styles.photo}>photo</div>
        </div>
        <div className={styles.info}>
          <ListGroup >
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                  <div className={styles.prop}><b>Name:</b></div>
                  <div className={styles.propInfo}>{userInfo.name}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                  <div className={styles.prop}><b>Location:</b></div>
                  <div className={styles.propInfo}>{userInfo.location}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                  <div className={styles.prop}><b>Instruments I Play:</b></div>
                  <div className={styles.propInfo}>{userInfo.instruments}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                  <div className={styles.prop}><b>Preferable Genres:</b></div>
                  <div className={styles.propInfo}>{userInfo.genres}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                  <div className={styles.prop}><b>About Me:</b></div>
                  <div className={styles.propInfo}>{userInfo.profile}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className={styles.nameBox}>
                  <div className={styles.prop}><b>My Bands:</b></div>
                  <div className={styles.propInfo}>{userInfo.groups}</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className={styles.nameBox}>
                  <div className={styles.prop}><b>Contacts:</b></div>
                  <div className={styles.propInfo}>
                    <div>{userInfo.phone || 'no info'}</div>
                    <div>{userInfo.email || 'no info'}</div>
                  </div> 
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div style={{textAlign: 'center'}}><Button variant='dark' style={{ fontSize: '2rem', margin: '50px 0'}} onClick={() => console.log('123')}>Invite</Button></div>
        </div>
      </div>
    </div>
  );
}
 
export default Profile;
