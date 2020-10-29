import React,{useState, useEffect, useContext} from 'react'
import Categories from './Categories'

import data from './data'
import Menu from './Menu'
import './menu.css'


function FilterApp() {

  const [meals, setMeals]=useState(data)
  
  const filterMeal = (category) =>{

   
    if(category === 'all'){

      setMeals(data)

    } else {

    const newItems = data.filter((item=>{

     return item.category === category
   }))

   setMeals(newItems)


    }
  
  
  }


  const handleMeal = (e) =>{


    if(e.target.value === 'all'){

      setMeals(data)

    } else {

    const newItems = data.filter((item=>{

     return item.category === e.target.value
   }))

   setMeals(newItems)


    }
   

  }


  const checkedMeal = (e) =>{


    if(e.target.checked === false){

      setMeals(data)

    }

    if(e.target.checked === true){

       const newItems = data.filter(item=> item.price > 20)

       setMeals(newItems)

    }

  }

  const handleRange = (e) =>{


    const newItems = data.filter(item=> item.price < parseFloat(e.target.value))

    setMeals(newItems)

    
   
    

   
  }


  return (
    <div className='container'>
      <h1 className='text-center'>My Menu</h1>
      <Categories 
      filterMeal={filterMeal} 
      data={data}
      handleMeal={handleMeal} 
      checkedMeal={checkedMeal}
      handleRange={handleRange}
      />
      <Menu meals={meals} />
    </div>
  )
}

export default FilterApp
