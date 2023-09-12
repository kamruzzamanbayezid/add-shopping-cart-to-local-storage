import { useState } from 'react';
import './Bottle.css'
const Bottle = ({ bottle, handlePurchase }) => {

      // use state to store handleBtn value
      const [purchasedBottle, setPurchasedBottle] = useState(false);

      // click handler to control two handler
      const handleTwoPurchase = () => {
            handlePurchase(bottle);
            handlePurchased();
      }

      // click handler to change button inner text to purchased when clicked
      const handlePurchased = () => {
            setPurchasedBottle(true); 
      }

      return (
            <div className='bottleStyle'>
                  <h3>Bottles: {bottle.name}</h3>
                  <img src={bottle.img} alt="" />
                  <p>Ratings: {bottle.ratings}</p>
                  <h4>Price: ${bottle.price}</h4>
                  <button id='handleBtn' onClick={handleTwoPurchase}>{purchasedBottle ? 'Purchased' : 'Purchase'}</button>
            </div>
      );
};

export default Bottle;