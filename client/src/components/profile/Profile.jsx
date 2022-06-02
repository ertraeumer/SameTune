import { useEffect, useState } from 'react';
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
    <div className={styles.profilePage}>
      <div className={styles.title}>{userInfo.name} Profile page</div>
      <div className={styles.profileContainer}>
        <div className={styles.photo}>photo {userInfo.photo}</div>
        <div className={styles.info}>
          <div>location {userInfo.location}</div>
          <div>name {userInfo.name}</div>
          <div>genres {userInfo.genres}</div>
          <div>groups {userInfo.groups}</div>
          <div>profile {userInfo.profile}</div>
          <div>instruments {userInfo.instruments}</div>
          <div>contacts</div>
          <div>mail {userInfo.email || 'no info'}</div>
          <div>phone {userInfo.phone || 'no info'}</div>
        </div>
      </div>
    </div>
  );
}
 
export default Profile;
