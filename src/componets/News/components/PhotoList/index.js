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

    window.addEventListener('scroll' , (event) => {
        let scrollPos = window.scrollY
        console.log(scrollPos);
        if(scrollPos >= 2971) {
            unsplashContext.search.photos(searchText, pageNumber)
                .then(toJson)
                .then(json => {
                    console.log(json);
                    loadPhotos(json.results, searchText);
                    pageNumber = pageNumber + 1
                });
                window.scrollTo(0, 0)
        }
    })

    let footer = document.getElementById("footer");
    const footerClick = () => {
        console.log(footer.offsetTop)
    }
    
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
                <button onClick={footerClick}>asda</button>
            </div>
            
        );
    else return (<div>Фотографии не найдены!</div>)
};

export default PhotoList;