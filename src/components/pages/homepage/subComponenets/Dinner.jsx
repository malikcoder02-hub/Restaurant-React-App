import React from 'react'
import { foodItems } from '../../../../services/menuItems';
import { FoodItemsCard } from '../../../common/foodItemsCard';
const Dinner = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {foodItems.filter(item => item.type === "dinner").map((item, index) => (
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

export default Dinner
