import './scss/app.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import pizzas from './assets/pizzas.json'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {pizzas.map((obj) => {
                return <PizzaBlock {...obj} key={obj.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
