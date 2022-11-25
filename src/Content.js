import React, {useState, useEffect} from "react"

const array= ['users', 'posts', 'comments']

function Content() {
    const [data, setData] = useState([])
    const [type, setType] = useState('users')
    const [typeScroll, setTypeScroll] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
        .then(data => data.json())
        .then(json => setData(json))
    },[type])

    useEffect(() => {
        const handleScroll = () => {
            setTypeScroll(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)

        return () => (
            window.removeEventListener('scroll', handleScroll)
        )
    }, [])

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
            {
                typeScroll && (
                    <button
                        style={{
                            position: "fixed",
                            bottom: 20,
                            right: 20
                        }}
                    >
                    Goto top
                    </button>
                )
            }
        </div>
    );
}

export default Content;