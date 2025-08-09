import React from 'react'

const Cards = ({ index,icon, title, paragraph }) => {
  return (
    <div
      key={index}
      className="flex flex-col w-full justify-center gap-3 items-center  rounded-sm drop-shadow-lg shadow-lg hover:scale-105 duration-300 hover:shadow-xl bg-white p-5"
    >
      <span className="text-5xl">{icon}</span>
      <h3 className="text-2xl font-bold text-black">{title}</h3>

      <p className="text-xl">{paragraph}</p>
    </div>
  );
};

export default Cards
