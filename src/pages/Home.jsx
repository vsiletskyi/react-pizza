import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { useContext, useEffect, useState } from 'react';
import Skeleton from '../components/PizzaBlock/Sleleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'

const Home = () => {

    const categoryId = useSelector((state) => state.filters.categoryId)
    const sortType = useSelector((state) => state.filters.sort.sortProperty)
    const currentPage = useSelector((state) => state.filters.currentPage)

    const dispatch = useDispatch()

    const {searchValue} = useContext(SearchContext)

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //const [currentPage, setCurrentPage] = useState(1);

    // const category = categoryId > 0 ? `category=${categoryId}` : ''
    // const search = searchValue ? `&search=${searchValue}` : ''
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'

    const queryParams = new URLSearchParams({
        page: currentPage,
        limit: 4,
        sortBy,
        order,
    })

    if (categoryId > 0) queryParams.append('category', categoryId)
    if (searchValue) queryParams.append('search', searchValue)
    
    const url = `https://66f15d654153791915509881.mockapi.io/items?${queryParams.toString()}`

    useEffect(() => {
        setIsLoading(true)

        axios.get(url)
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log('Error fetching pizzas:', err)
                setIsLoading(false)
            })
        window.scrollTo(0,0)
    }, [categoryId, sortType, searchValue, currentPage])

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
    const pizzas = items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangePade = num => {
        dispatch(setCurrentPage(num))
    }
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={ categoryId } onClickCategory={onClickCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
              {isLoading
                ? skeletons
                : pizzas}
            </div>
            <Pagination currentPage={currentPage} onPageChange={onChangePade} />
        </div>
    )
}

export default Home;