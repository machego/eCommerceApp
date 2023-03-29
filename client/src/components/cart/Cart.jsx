import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 9,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Lorem ipsum dolor sit",
            desc: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 49,
            price: 29,
        },
        {
            id: 10,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "coat",
            desc: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 49,
            price: 29,
        },
    ]


  return (
      <div className='cart'>
          <h1>Products in your cart</h1>
          { data?.map(item => (
              <div className='item' key={ item.id }>
                  <img src={ item.img } alt='' />
                  <div className='details'>
                      <h1>{ item.title }</h1>
                      <p>{ item.desc?.substring(0, 100) }</p>
                      <div className='price'>1 x ${ item.price }</div>
                  </div>
                  <DeleteOutlinedIcon className='delete'/>
              </div>
          )) }
          <div className='total'>
              <span>SUBTOTAL</span>
              <span>$123</span>
          </div>
          <button>PROCEED TO CHECKOUT</button> 
          <span className='reset'>Reset Cart</span>
      </div>
  )
}

export default Cart