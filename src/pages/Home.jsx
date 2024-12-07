import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Sleleton';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [categoryId, setCategoryId] = useState(1);
    const [sortType, setSortType] = useState({
        name: 'popularity',
        sortProperty: 'rating'
    });

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://66f15d654153791915509881.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
        
        .then((res) => {
            return res.json()
        })
        .then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
        window.scrollTo(0,0)
    }, [categoryId, sortType])

    console.log(categoryId, sortType)
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={ categoryId } onClickCategory={(index)=> setCategoryId(index)}/>
                <Sort value={ sortType } onClickSort={(index)=> setSortType(index)}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
            </div>
        </div>
    )
}

export default Home;