import React from 'react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Organic Manure Blend',
      description: 'High-quality manure made from recycled food waste, perfect for enriching soil naturally.',
      price: 15.99,
      image: 'https://via.placeholder.com/300x200?text=Manure+Blend',
    },
    {
      id: 2,
      name: 'Compost Starter Kit',
      description: 'A starter kit to turn food scraps into nutrient-rich compost at home.',
      price: 9.99,
      image: 'https://via.placeholder.com/300x200?text=Compost+Kit',
    },
  ];

  return (
    <section className="shop__container py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Sustainable Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;