import React from 'react';

const Table = (props) => {
    const { name, phone, email, location } = props.employee;
    return (
        <tr>
            <td>{name.last}</td>
            <td>{name.first}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{location.city}, {location.state}</td>
        </tr>
    );
};

export default Table;