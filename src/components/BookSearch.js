import React, { useState } from 'react';



const BookSearch = ({onSearch}) => {

  const [searchValue, setSearchValue] = useState('');
  
  const divStyle = {
    marginTop: '20px'
  };
  
  const changeTitle = (event) => {
    setSearchValue(event.target.value);
  }


  const searchBook = () => {
    onSearch(searchValue);
  }
  return (
    <div className="input-group mb-3" style={divStyle}>
      <input type="text" className="form-control" placeholder="Book Title" aria-label="Book Title" aria-describedby="button-addon2" value={searchValue} onChange={changeTitle}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={searchBook}>Search</button>
      </div>
    </div>
  )
}

export default BookSearch;