import React, {useEffect} from "react";
import unsplashContext from "../../../../helpers/unsplash-helper";
import {toJson} from "unsplash-js";
import classes from "./index.module.css";
import Preloader from "../../../common/Preloader/Preloader";


const PhotoList = (props) => {
    const {
        searchText,
        oldSearch,
        photos,
        loadPhotos
    } = props;

    useEffect(() => {
            if (searchText !== oldSearch) {
            unsplashContext.search.photos(searchText)
                .then(toJson)
                .then(json => {
                    loadPhotos(json.results, searchText);
                });
        }
    });

    let pageNumber = 2;

    window.addEventListener('scroll', function() {		  
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        console.log(windowRelativeBottom);
        // если пользователь прокрутил достаточно далеко (< 100px до конца)
        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
          // добавим больше данных
              unsplashContext.search.photos(searchText, pageNumber)
                .then(toJson)
                .then(json => {
                    console.log(json);
                    loadPhotos(json.results, searchText);
                    pageNumber = pageNumber + 1
                });
            }
          
    });

    if (photos)
        return (
            <div>
                <div className={classes.container}>
                { photos.length === 0 ? <Preloader /> :
                    photos.map(photo => {
                        return (
                            <div key={photo.id}>
                                <img key={photo.id} src={photo.urls.small} alt='somePhoto'/>
                                <p>likes:{photo.likes}</p>
                            </div>
                        );
                    })
                }
                </div>
                <footer id='footer'>Тут футер</footer>
            </div>
            
        );
    else return (<div>Фотографии не найдены!</div>)
};

export default PhotoList;