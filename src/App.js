import Content from './Content'
import './App.css'

const App = () => {
  return (
      <div>
        {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change theme</button> */}
        <button>Change theme</button>
        <Content/>
      </div>
  );
}

export default App;
