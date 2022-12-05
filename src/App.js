import Content from './Content'
import './App.css'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const data = useContext(ThemeContext)
  return (
    <div>
      <button onClick={data.handleClick}>Change theme</button>
      <Content/>
    </div>
  );
}

export default App;
