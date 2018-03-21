import { combineReducers } from 'redux';
import BooksReducer from '../features/book-list/reducers/books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
