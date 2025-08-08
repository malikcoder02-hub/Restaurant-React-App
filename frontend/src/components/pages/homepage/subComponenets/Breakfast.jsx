import React from 'react'
import { foodItems } from '../../../../services/menuItems';
import { FoodItemsCard } from '../../../common/foodItemsCard';
const Breakfast = () => {
  return (
    <div>
        {foodItems.filter(item => item.type === "breakfast").map((item, index) => (
            <FoodItemsCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
            />
        ))}

      
    </div>
  )
}

export default Breakfast
