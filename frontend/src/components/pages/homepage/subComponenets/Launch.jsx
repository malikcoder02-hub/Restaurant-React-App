import React from 'react'
import { foodItems } from '../../../../services/menuItems';
import { FoodItemsCard } from '../../../common/foodItemsCard';

const Launch = () => {
  return (
    <div>
      {foodItems.filter(item => item.type === "launch").map((item, index) => (
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

export default Launch
