import React from 'react';

const Watches = () => {
  const watchData = [
    { id: 1, name: 'Tissot Supersports', price: 50000, description: 'Sporty and stylish', image: '/Tissot.jpg' },
    { id: 2, name: 'Omega', price: 8000, description: 'Sporty design', image: '/Omega.jpg' },
    { id: 3, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/Rolex.jpg' },
    { id: 4, name: 'Omega Master', price: 40000, description: 'Elegant timepiece', image: '/Omega Master.jpg' },
    { id: 5, name: 'Master Ultra', price: 45000, description: 'Luxury watch', image: '/Master Ultra.jpg' },
    { id: 6, name: 'Blancpain Villeret', price: 10000, description: 'Diamond Dial Gold Watch', image: '/Blancpain Villeret.jpg' },
    { id: 7, name: 'RADO', price: 7000, description: 'Bold and rugged', image: '/Rado.jpg' },
    { id: 8, name: 'La Hublot Classic ', price: 35000, description: 'Luxury watch', image: '/La Hublot Classic .jpg' },
    { id: 9, name: 'David Yarman', price: 5000, description: 'Luxury watch', image: '/David Yarman.jpg' },
  ];

  return (
    <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {watchData.map(watch => (
        <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
          <img src={watch.image} alt={watch.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{watch.name}</h3>
          <p className="text-gray-500">{watch.description}</p>
          <div className="price text-[#e46e00] text-xl font-semibold mt-2">${watch.price}</div>
          <button className="mt-4 px-4 py-2 bg-[#e46e00] hover:bg-[#8daac7] text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Watches;