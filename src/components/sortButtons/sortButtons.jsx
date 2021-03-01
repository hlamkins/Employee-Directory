import React from 'react';
import './SortButtons.css';

const SortButtons = (props) => {
    return (
        <div className="btn-group" role="group">
            <button onClick={() => props.sortByName("first")} type="button" className="btn btn-outline-dark">Sort by First Name</button>
            <button onClick={() => props.sortByName("last")} type="button" className="btn btn-outline-dark">Sort by Last Name</button>
        </div>
    );
};

export default SortButtons;