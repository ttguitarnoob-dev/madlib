import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import CreateStory from './components/CreateStory';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Slightly Frustrated Lib</h1>
      </header>
      <main>
        <CreateStory/>
        {/* <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/create-story' element={ <CreateStory/>}/>
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
