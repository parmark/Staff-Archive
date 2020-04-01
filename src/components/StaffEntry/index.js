import React from 'react';

function StaffCard(props) {
    return (
        <tr>
            <td><img src={props.picture} alt="faceshot"></img></td>
            <td>{props.name}</td>
            <td>{props.age}</td>
        </tr>
    )
}

export default StaffCard;