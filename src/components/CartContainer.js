import React from 'react'
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const {amount,total,cartItems} = useSelector(state=>state.cart)
    if (amount < 1) {
        return (
          <section className='cart'>
            {/* cart header */}
            <header>
              <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        );
      }
  return (

    <div>CartContainer</div>
  )
}

export default CartContainer