import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/4427880/pexels-photo-4427880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4427886/pexels-photo-4427886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={ images[0] } alt='' onClick={e => setSelectedImg(0)}/>
          <img src={ images[1] } alt='' onClick={e => setSelectedImg(1)}/>
        </div>
        <div className='mainImg'>
        <img src={ images[selectedImg] } alt='' />
        </div> 
      </div>
      <div className='right'>
        <h1>Title</h1> 
        <span className='price'>$209</span> 
        <p>Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          At vero eos et accusam
        </p> 
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>-</button>
            {quantity}
          <button onClick={() => setQuantity((prev) => prev+1)}>+</button> 
        </div>
        <button className='add'>
        <AddShoppingCartIcon/> ADD TO CART 
        </button>
        <div className='link'>
          <div className='item'>
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className='item'>
            <BalanceIcon/> ADD TO COMPARE 
          </div> 
        </div>
        <div className='info'>
          <span>Vendor: Cocotex</span>
          <span>Product Type: Coat</span>
          <span>Tag: Coat, Women, Top</span>
        </div>
        <hr />
        <div className='info'>
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product