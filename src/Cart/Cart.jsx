import './Cart.css'

const Cart = ({ cartBottle,handleCartBottle }) => {
      return (
            <div className="cartBottleStyle">
                  <img src={cartBottle.img} alt="" />
                  <br></br>
                  <button onClick={()=>{handleCartBottle(cartBottle.id)}}>Remove</button>
            </div>
      );
};

export default Cart;