import React from 'react';
import {loadPhotosActionCreator, searchActionCreator} from "../../Redux/actions";
import {connect} from "react-redux";
import PhotoList from "./components/PhotoList";
import SearchInput from "./components/SearchBox";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let News = (props) => {

    const {
        photos,
        oldSearch,
        searchText,

        search,
        loadPhotos
    } = props;

    return (
        <div className="App">
            <SearchInput
                searchText={searchText}
                search={search}
            />
            <PhotoList
                photos={photos}
                oldSearch={oldSearch}
                searchText={searchText}
                loadPhotos={loadPhotos}
            />
            <footer>Тут футер</footer>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        searchText: state.searchStore.searchText,
        oldSearch: state.photoStore.oldSearch,
        photos: state.photoStore.photos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (searchtext) => dispatch(searchActionCreator(searchtext)),
        loadPhotos: (photos, searchText) => dispatch(loadPhotosActionCreator(photos, searchText)),
    }
};
News = connect(mapStateToProps, mapDispatchToProps)(News);
let RedirectComponent = withAuthRedirect(News);

export default RedirectComponent;
