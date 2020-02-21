import React, { useReducer, createContext } from 'react';
import { bookReducer } from '../reducers/book.reducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [{title:"title 1", id:"1"},{title:"title 2", id:"2"},{title:"title 3", id:"3"},{title:"title 4", id:"4"}])


    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;