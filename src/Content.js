import React, {useState} from "react";

function Content(props) {
    return (
        <ul>
            {
                props.users.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))
            }
        </ul>
    );
}

export default Content;