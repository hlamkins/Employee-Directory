import React from 'react';

const Search = (props) => {
    return (
        <form>
            <input onChange={event => props.handleInputChange(event.target.value)} type="text" className="form-control" placeholder="filter by location (state)"></input>
        </form>
    );
};

export default Search;