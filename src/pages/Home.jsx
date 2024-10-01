import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Sleleton';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://66f15d654153791915509881.mockapi.io/items')
        .then((res) => {
            return res.json()
        })
        .then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [])
    
    return (
        <>
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
            </div>
        </>
    )
}

export default Home;