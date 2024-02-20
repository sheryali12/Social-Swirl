import React from 'react';
import './Cards.scss';
import products from '../../components/Products';

const Cards = () => {

  return (

    <div className='CardsMainDiv'>
         <h1 >Our Courses</h1>
   
    <div className="card-list">

{ 
      products.map((item) => (

        <div key={item.id} className="card">

          <img src={item.image} alt={item.title} />

          <div className="description">

            <h2>{item.title}</h2>
            <p>{item.description}</p>
            
<div className='btnss'>
<button >Explore</button>
</div>  
          </div>

        </div>

      ))

      }

    </div>
    </div>
  );
};

export default Cards;
