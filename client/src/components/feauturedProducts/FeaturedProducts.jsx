import Card from '../card/Card';
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

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
              { error
                ?"Something went wrong"
                : loading
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id}/>)}
          </div> 
      </div>
  )
}

export default FeaturedProducts