import React from 'react'
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
const foodMenuLinks = [
  {
    type:"breakfast",
    image: "/images/tea_cup.svg",
    title: "Breakfast",
    description: "Popular",
  },
  { type: "lunch",
    image: "/images/lunch_icon.svg",
    title: "Lunch",
    description: "Special",
  },
  {
    type:"dinner",
    image: "/images/dinner_icon.svg",
    title: "Dinner",
    description: "Lovely",
  }
];



const MenuSection = () => {
  const [type, setType] = React.useState("breakfast");
  const activeLink = "border-b-3 border-black text-black";
  const inactiveLink = "border-b-3 border-gray-300 text-gray-600";


const handleTypeChange = (newType) => {
    setType(newType);
  };




  return (
    <section className="flex flex-col items-center justify-center w-full py-20 gap-10 bg-gray-100">
      <span className="text-orange-500 text-lg font-bold mb-2 flex items-center gap-2">
        -- Food Menu --
      </span>
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-black">
        Most Popular Items
      </h2>
      {/* Buttons Section */}
      <div className="grid grid-cols-3 gap-5 self-center w-[50%] items-center justify-center">
        {foodMenuLinks.map((item, index) => (
          <div
            key={index}
            className={`flex items-center pb-1 justify-center gap-2 ${
              type === item.type ? activeLink : inactiveLink
            } hover:border-b-3 hover:border-black transition-all duration-300`}
            onClick={() => handleTypeChange(item.type)}
          >
            <img src={item.image} alt={item.title} className="w-16 h-16" />
            <div className="gap-0 flex flex-col items-start justify-center">
              <span className="text-gray-600 text-xl">{item.description}</span>
              <h3 className=" font-bold text-2xl text-black">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* Menu Items Section */}
      <div className="flex w-[70%] gap-5 self-center items-center justify-center">
        {type === "breakfast" && <Breakfast />}
        {type === "lunch" && <Lunch />}
        {type === "dinner" && <Dinner />}
      </div>
    </section>
  );
}

export default MenuSection;
