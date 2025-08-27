import React from "react";
import { NavLink } from "react-router-dom";

import cartEmptyImg from "../../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>
          Cart is empty <icon>😕</icon>
        </h2>
        <p>
          Most likely, you haven't ordered a pizza yet.
          <br />
          To order a pizza, go to the main page.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <NavLink to="/" class="button button--black">
          <span>Go back</span>
        </NavLink>
      </div>
    </div>
  );
};

export default CartEmpty;
