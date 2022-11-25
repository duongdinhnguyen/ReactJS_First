import React, {useState, useEffect} from "react";

const array= ['users', 'posts', 'comments'];

function Content() {
    const [data, setData] = useState([])
    const [type, setType] = useState('users')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
        .then(data => data.json())
        .then(json => setData(json))
    },[type])

    return (
        <div>
            {
                array.map((item, index) => (
                    <button 
                        key={index}
                        style={type === item ? {
                            backgroundColor: "#ccc"
                        } : {}}
                        onClick={() => setType(item)}
                    >
                        {item}
                    </button>
                ))
            }
            <ul>
                {
                    data.map((item, index) => (
                        <li key={index}>{item.body || item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Content;