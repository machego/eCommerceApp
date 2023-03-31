import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
      <div className='categories'>
          <div className='col'>
              <div className='row'>
                  <img src='../../../public/img/123.jpg' alt='' />
                  <button>
                      <Link className='link' to='/products/1'>Sale</Link>
                  </button> 
              </div>
              <div className='row'>
                  <img src='../../../public/img/123.jpg' alt='' />
                  <button>
                      <Link className='link' to='/products/1'>Women</Link>
                  </button> 
              </div>
          </div>
          <div className='col'>
              <div className='row'>
              <img src='../../../public/img/123.jpg' alt='' />
                  <button>
                      <Link className='link' to='/products/1'>Women</Link>
                  </button> 
              </div>
          </div>
          <div className='col col-l'>
              <div className='row'>
                  <div className='col'>
                      <div className='row'>
                          <img src='../../../public/img/123.jpg' alt='' />
                  <button>
                      <Link className='link' to='/products/1'>New Season</Link>
                  </button> 
                      </div> 
                  </div>
                  <div className='col'>
                      <div className='row'>
                      <img src='../../../public/img/123.jpg' alt='' />
                  <button>
                      <Link className='link' to='/products/1'>Men</Link>
                  </button> 
                      </div>
                  </div>
            </div>
              <div className='row'>
              <img src='../../../public/img/123.jpg' alt='' />
                  <button>
                      <Link className='link' to='/products/1'>Shoes</Link>
                  </button> 
              </div>
          </div>
      </div>
  )
}

export default Categories