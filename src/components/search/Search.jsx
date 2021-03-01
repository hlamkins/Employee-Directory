import React from 'react';
import "./Search.css";

const Search = (props) => {
    return (
        <form>
            <input onChange={event => props.handleInputChange(event.target.value)} type="text" className="form-control" placeholder="filter by location (state)"></input>
        </form>
    );
};

export default Search;