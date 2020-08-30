// Константы для лучшей поддержки кода
export const SEARCH = "SEARCH";
export const LOAD_PHOTOS = "LOAD_PHOTOS";

// Action Creators - их будем вызывать в компонентах, а они в свою очередь будут
// формировать action и передавать в редьюсеры с нужными параметрами
// Никаких других действий внутри делать не нужно, ни запросов, ни вычислений, только обработать
// входные данные и передать их в объекте action дальше редьюсеру
export const loadPhotosActionCreator = (photos, searchText) => ({type: LOAD_PHOTOS, photos, searchText});
export const searchActionCreator = (searchText) => ({type: SEARCH, searchText});

