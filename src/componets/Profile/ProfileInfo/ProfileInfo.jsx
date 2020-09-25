import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import UserPhoto from '../../../accets/NAvatar.png'
import ProfileStatus from './ProfileStatus'
import ProfileStatusHook from './ProfileStatusHook'



export default function ProfileInfo(props) {
  return (
    <div className={classes.block}>
        {!props.profile & !props.statues? <Preloader /> : <img  className={classes.avatar} src={props.profile.photos.large ? props.profile.photos.large : UserPhoto} alt='avatar'/>}
        <div className={classes.rightBlock}>
          {!props.profile ? null : <ProfileStatusHook updateStatus={props.updateStatus} status={props.status} /> }
          {!props.profile ? null : <p className={classes.job}>{props.profile.lookingForAJob ? <span>Ищу Работу:</span> : null}</p>}
          {!props.profile ? null : <p className={classes.jobDescr}>{props.profile.lookingForAJobDescription ? <span>{props.profile.lookingForAJobDescription}</span> : null}</p>}
        </div>
        {props.profile != null ? <h3 className={classes.fullName}>{props.profile.fullName}</h3> : null}
    </div>
  )
}
