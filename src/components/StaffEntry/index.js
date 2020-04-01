import React from 'react';

function StaffCard(props) {
    return (
        <tr>
            <td><img src={props.picture} alt="FUCK"></img></td>
            <td>{`${props.first} ${props.last}`}</td>
            <td>{props.age}</td>
        </tr>
    )
}

export default StaffCard;