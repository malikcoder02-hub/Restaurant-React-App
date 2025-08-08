import React from 'react'
import { foodItems } from '../../../../services/menuItems';
import { FoodItemsCard } from '../../../common/foodItemsCard';

const Lunch = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {foodItems.filter(item => item.type === "lunch").map((item, index) => (
        <FoodItemsCard 
          key={index} 
          title={item.title}
          image={item.image} 
          price={item.price} 
          description={item.description} 
        />
      ))}
    </div>
  )
}

export default Lunch
