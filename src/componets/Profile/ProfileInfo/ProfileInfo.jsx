import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'


export default function ProfileInfo(props) {
  return (
    <div>
        {!props.profile ? <Preloader /> : <img  className={classes.avatar} src={props.profile.photos.large} alt='avatar'/>}
        <div className={classes.rightBlock}>
          {!props.profile ? <></> : <p className={classes.status}>{props.profile.aboutMe}</p>}
          {!props.profile ? <></> : <p className={classes.job}>{props.profile.lookingForAJob ? <span>Ищю Работу:</span> : <></>}</p>}
          {!props.profile ? <></> : <p className={classes.jobDescr}>{props.profile.lookingForAJobDescription ? <span>{props.profile.lookingForAJobDescription}</span> : <></>}</p>}
        </div>
        {props.profile != null ? <h3 className={classes.fullName}>{props.profile.fullName}</h3> : <h3></h3>}
    </div>
  )
}
