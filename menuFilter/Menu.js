import React from 'react'

function Menu({meals}) {
  return (
    <div>
      {meals.map(item=>{

        const {id, title, category, price, img, desc}=item

       

        return <div className='menu-card'>

                <img className='img-responsive' src={img} alt='' />

                  <div className='flex-span'>
                    <div className='title-flex'>

                  <h5>{title}</h5>
                  <h5>${price}</h5>
                      </div>
                  <p>{desc}</p>
                  </div>
              </div>

      })}
    </div>
  )
}

export default Menu
