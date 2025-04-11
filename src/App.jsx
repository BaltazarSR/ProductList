import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'

export const App = () => {

  // Aquí se define en donde se almacenará la lista de productos y como se inicializará

  const [products, setProducts] = useState([]);

  // Aquí se usó useEffect para hacer una carga de datos, en este caso se simula una conexión a API

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Paracetamol 500mg",
          price: 16,
          Newprice: 12,
          image: "./src/assets/products/paracetamol.webp"
        },
        {
          id: 2,
          name: "Ibuprofen Gel",
          price: 22,
          Newprice: 17,
          image: "./src/assets/products/ibuprofen-gel.webp"
        },
        {
          id: 3,
          name: "Antibacterial Hand Gel",
          price: 9,
          Newprice: 6,
          image: "./src/assets/products/hand-sanitizer.jpg"
        },
        {
          id: 4,
          name: "Digital Thermometer",
          price: 45,
          Newprice: 38,
          image: "./src/assets/products/digital-termometer.webp"
        },
        {
          id: 5,
          name: "Face Masks (10 pack)",
          price: 14,
          Newprice: 10,
          image: "./src/assets/products/facemask.jpg"
        },
        {
          id: 6,
          name: "Cough Suppressant Syrup",
          price: 20,
          Newprice: 15,
          image: "./src/assets/products/cough-syrup.jpg"
        },
        {
          id: 7,
          name: "Vitamin C Effervescent",
          price: 18,
          Newprice: 13,
          image: "./src/assets/products/vitamic-c.png"
        },
        {
          id: 8,
          name: "Burn Relief Cream",
          price: 12,
          Newprice: 9,
          image: "./src/assets/products/burn-relief.avif"
        },
        {
          id: 9,
          name: "Bandages (Assorted Sizes)",
          price: 8,
          Newprice: 6,
          image: "./src/assets/products/band-aid.png"
        },
        {
          id: 10,
          name: "Saline Nasal Spray",
          price: 11,
          Newprice: 8,
          image: "./src/assets/products/nasal-spray.avif"
        }
      ]);
    }, 1000);
  }, []);

  return (
    <div className='main-container'>
      <div className='title'>
        <div className='main-title'>
          <div className='title-1'> 
            Farmacy 
          </div>
          <div className='sub-title'>
            <div className='title-2'> 
              The Best Products
            </div>
            <div className='title-3'> 
              For your health at the best price
            </div>
          </div>
        </div>
        <img src = "./src/assets/shopping-car.png" alt="shopping-car" className='shopping-car'/>
      </div>
      <div className='content'>
        {/* Aquí se usa map para crear los productos que esten en la lista con el diseño establecido */}
        {products?.map(product => (
          <div key={product.id} className='product'>
            <div className='image-container'>
              <img src = {product.image} alt= "product-image" className='product-image'/>
              <button onClick={() => alert(`${product.name} added to the car`)} className='add-button'>+</button>
            </div>
            <p className='product-name'>{product.name}</p>
            <div className='prices'>
              <p className='product-price'>${product.price}</p>
              <p className='product-new-price'>${product.Newprice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App