import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { useContext, useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Sleleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

const Home = () => {
    const {searchValue} = useContext(SearchContext)

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'popularity',
        sortProperty: 'rating'
    });

    const [currentPage, setCurrentPage] = useState(1);

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://66f15d654153791915509881.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
        
        .then((res) => {
            return res.json()
        })
        .then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
        window.scrollTo(0,0)
    }, [categoryId, sortType, searchValue, currentPage])

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
    const pizzas = items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={ categoryId } onClickCategory={(index)=> setCategoryId(index)}/>
                <Sort value={ sortType } onClickSort={(index)=> setSortType(index)}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {isLoading
                ? skeletons
                : pizzas}
            </div>
            <Pagination onPageChange={(number)=> setCurrentPage(number)} />
        </div>
    )
}

export default Home;