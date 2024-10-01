import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {



  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
