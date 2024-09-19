import { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const onClickCategory = (index) => {
    setActiveIndex(index)
  }

  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']

    return (
      <div className="categories">
        <ul>
          {categories.map((category, index) => {
            return <li key={index} onClick={()=>onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{category}</li>
          })}
        </ul>
      </div>
    )
}
  
export default Categories;