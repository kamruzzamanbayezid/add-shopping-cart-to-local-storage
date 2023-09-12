import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCartFromLocalStorage, removeCartFromLocalStorage } from "../../Utlities/Localstorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {

      // Use state to store all data
      const [bottles, setBottles] = useState([]);

      // Use state to store data when handlePurchase is Clicked
      const [getBottle, setGetBottle] = useState([]);

      console.log(getBottle);
      // Use Effect to load main data
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json');
                        const data = await res.json();
                        setBottles(data);
                  } catch (error) {
                        console.log(error);
                  }
            }
            fetchData();
      }, []);

      // use effect to show data after purchased
      // useEffect(() => {
      //       if (bottles.length > 0) {
      //             const storedStringifiedData = getStoredCartFromLocalStorage();

      //             let savedData = [];
      //             for (let id of storedStringifiedData) {

      //                   const findData = bottles.find(data => data.id === id);

      //                   savedData.push(findData);
      //             }
      //             setGetBottle(savedData)
      //       }
      // }, [bottles])

      // Click handler for purchase
      const handlePurchase = (bottle) => {
            const newBottle = [...getBottle, bottle];
            setGetBottle(newBottle);

            // addToLocalStorage(bottle.id);
      }

      // Click handler to remove item
      const handleCartBottle = (id) => {
            const remaining = getBottle.filter(bottle => bottle.id !== id)
            console.log(remaining);
            // setGetBottle(remaining);
            setGetBottle(prev => [...remaining])

            // removeCartFromLocalStorage(id);
      }

      return (
            <div>
                  <h3>Available Bottle: {bottles.length}</h3>

                  <h3>Purchases Bottle: {getBottle.length}</h3>

                  {/* Single cart */}
                  <div className="cardBottleStyle">
                        {
                              getBottle.map(cartBottle => <Cart
                                    key={cartBottle.id}
                                    cartBottle={cartBottle}
                                    handleCartBottle={handleCartBottle}>
                              </Cart>)
                        }
                  </div>

                  <div className="bottlesStyle">
                        {
                              bottles.map((bottle, index) => <Bottle
                                    key={index}
                                    bottle={bottle}
                                    handlePurchase={handlePurchase}>
                              </Bottle>)
                        }
                  </div>
            </div>
      );
};

export default Bottles;