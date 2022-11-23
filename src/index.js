import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function FormRegister(props) {

    const [user, setUser] = useState("");

    const handleSubmitForm = e => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            localStorage.setItem("token", json.access_token);
        });
    }
    
    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <label>Tên đăng nhập</label>
                <input id="name" name="name" onChange={e =>setUser({...user, name : e.target.value})}></input>
            </div>
            <div>
                <label>Mật khẩu</label>
                <input id="password" name="password" onChange={e =>setUser({...user, password : e.target.value})}></input>
            </div>
            <div>
                <label>Email</label>
                <input id="email" name="email" onChange={e =>setUser({...user, email : e.target.value})}></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}

const formRegister = <FormRegister />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    formRegister
);

reportWebVitals();
