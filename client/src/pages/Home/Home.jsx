import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/feauturedProducts/FeaturedProducts'
import './Home.scss'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home