import React from 'react'
import './List.scss'
import Card from '../card/Card';

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isNew: true,
            oldPrice: 49,
            price: 29,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/6535369/pexels-photo-6535369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Coat",
            isNew: true,
            oldPrice: 9,
            price: 2,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Shirt",
            isNew: true,
            oldPrice: 199,
            price: 52,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Shoe",
            isNew: true,
            oldPrice: 99,
            price: 22,
        },
    ];

  return (
      <div className='list'>
          {data?.map(item => (
            <Card item={item} key={item.id} />  
          ))}</div>
  )
}

export default List