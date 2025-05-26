import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';

import './scss/app.scss';

export const SearchContext = createContext();

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
