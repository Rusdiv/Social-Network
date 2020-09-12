import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import UserPhoto from '../../../accets/NAvatar.png'
import ProfileStatus from './ProfileStatus'



export default function ProfileInfo(props) {
  return (
    <div>
        {!props.profile ? <Preloader /> : <img  className={classes.avatar} src={props.profile.photos.large ? props.profile.photos.large : UserPhoto} alt='avatar'/>}
        <div className={classes.rightBlock}>
          {!props.profile ? null : <ProfileStatus status={props.profile.aboutMe} /> }
          {!props.profile ? null : <p className={classes.job}>{props.profile.lookingForAJob ? <span>Ищю Работу:</span> : <></>}</p>}
          {!props.profile ? null : <p className={classes.jobDescr}>{props.profile.lookingForAJobDescription ? <span>{props.profile.lookingForAJobDescription}</span> : <></>}</p>}
        </div>
        {props.profile != null ? <h3 className={classes.fullName}>{props.profile.fullName}</h3> : <h3></h3>}
    </div>
  )
}
