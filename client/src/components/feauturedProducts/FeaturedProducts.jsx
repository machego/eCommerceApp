import Card from '../card/Card';
import React from 'react'
import './FeaturedProducts.scss'

function FeaturedProducts({type}) {

    const data = [
        {
            id: 5,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isNew: true,
            oldPrice: 49,
            price: 29,
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isNew: true,
            oldPrice: 9,
            price: 2,
        },
        {
            id: 7,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isNew: true,
            oldPrice: 199,
            price: 52,
        },
        {
            id: 8,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isNew: true,
            oldPrice: 99,
            price: 22,
        },
    ];


  return (
      <div className='featuredProducts'>
          <div className='top'>
              <h1>{ type } products</h1> 
              <p>
                  Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua.
              </p> 
          </div> 
          <div className='bottom'>
              { data.map( item => (
                  <Card item={item} key={item.id}/>
              ))}
          </div> 
      </div>
  )
}

export default FeaturedProducts