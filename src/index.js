import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Form (props) {
    function handleClickButton (e) {
        alert(e.target.value);
    }
    return (
        <button value="1" onClick={handleClickButton}>
            {props.nameButton}
        </button>
    );
}
const form = <Form nameButton="Button nè"/>
const root = ReactDOM.createRoot(document.getElementById('root'));

class Button extends React.Component {
    state = {
        name : "Button con nè"
    }
    handleClickButton() {
        this.setState({name : "Không phải button đâu"});
    }

    styleButton = {
        display : "flex",
    }

    render() {
        return (
            <div style={this.styleButton}>
                <button value="12345" onClick={this.handleClickButton.bind(this)}>
                    {this.props.nameButton}
                </button>
                {/* <ButtonChild name={this.state.name}/> */}
            </div>
        );
    };
}

class ButtonChild extends Button {
    handleClickButtonChild(e) {
        alert(1234556);
    }

    render() {
        return (
            <button onClick={this.handleClickButtonChild}>
                {this.props.name}
            </button>
        );
    }
}

const button = <Button nameButton="Button đấy" />
root.render(
  button
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
