import { combineReducers } from 'redux';
import Books from '../features/book-list/reducers/books';
import ActiveBook from '../features/book-list/reducers/activeBook';

const rootReducer = combineReducers({
  books: Books,
  activeBook: ActiveBook
});

export default rootReducer;
