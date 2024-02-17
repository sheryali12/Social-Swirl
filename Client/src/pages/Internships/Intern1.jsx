import React from 'react';
import products from '../../components/ProductIntern';
import './intern1.scss'

function Intern1() {

  return (
    <div className="intern1Container">          

      {products.map(item => (
        <div className="intern" key={item.id}>

          <img src={item.image} alt={item.title} />

          <div className="description">
            <div className="btn">
              <button>Apply Here</button>
            </div>

          </div>

        </div>
      ))}


    </div>

  );
}

export default Intern1;
