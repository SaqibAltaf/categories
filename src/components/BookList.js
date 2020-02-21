
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

// class BookList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark

//     return (
//       <div className="book-list" style={{color:theme.syntax, background:theme.bg}}>
//         <ul>
//           <li style={{background:theme.ui}} >the way of kings</li>
//           <li style={{background:theme.ui}}> the name of the wind</li>
//           <li style={{background:theme.ui}}> the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }


const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, dispatch } = useContext(BookContext);
  const theme = isLightTheme ? light : dark

  const removeBook = (id) => {
    dispatch({
      type: "REMOVE_BOOK", id: id
    })
  }
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.length > 0 ?

          books.map((val, key) => {
            return (
              <li key={key} style={{ background: theme.ui }} onClick={() => removeBook(val.id)}>{val.title}</li>
            )
          }) : <h1>No record</h1>
        }
      </ul>
    </div>
  )
}

export default BookList;  