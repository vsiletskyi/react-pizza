import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
//import NotFound from './pages/NotFound';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Home />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
