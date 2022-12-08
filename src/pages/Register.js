import { useState } from "react"

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleSubmit = () => {
        fetch('http://127.0.0.1:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then(data => {
            if (data) {
                window.location.href = '/login'
            }
        })
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Register</h1>
            <div style={{ paddingLeft: "40%" }}>
                <div style={{ padding: 20, display: 'flex' }}>
                    <label style={{ width: 120 }}>Tên đăng nhập</label>
                    <input 
                        placeholder="Nhập tên..."
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                    />
                </div>
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

export default Register