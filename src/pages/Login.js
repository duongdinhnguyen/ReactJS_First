import { useState } from "react"

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })


    const handleSubmit = () => {
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then(data => {
            if (data.access_token) {
                localStorage.setItem('token_login', data.access_token)
                window.location.href = '/'
            }
            else window.location = window.location.href
        })
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <div style={{ paddingLeft: "40%" }}>
                <div style={{ padding: 20, display: 'flex' }}>
                    <label style={{ width: 120 }}>Email</label>
                    <input 
                        placeholder="Nhập email..."
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                </div>
                <div style={{ padding: 20, display: 'flex' }}>
                    <label style={{ width: 120 }}>Mật khẩu</label>
                    <input 
                        placeholder="Nhập mật khẩu..."
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                </div>
                <div style={{ padding: 20 }}>
                    <button 
                        style={{ marginLeft: "15%" }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login