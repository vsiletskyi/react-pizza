import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useState } from 'react';


function App() {

  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue + ' input changed')

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Home searchValue={searchValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
