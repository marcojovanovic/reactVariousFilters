import React from 'react'

function Categories({filterMeal, data, handleMeal, checkedMeal, handleRange}) {

   let category = new Set(data.map(item=>item.category))

   let res = ['all', ...category]

   
  let min = 1.99
  let max = 22.99
  let price = 22.99

 

  return (
    <>

    <div className='flex'>
   
      {res.map(item=>{

return <button onClick={()=>filterMeal(item)} className='btn-content'>{item}</button>


      })}
     
    

    </div>
    <div className='flex'>


 <select onChange={handleMeal}>
       {res.map(item=>{

        return <option>{item}</option>
             
            

       })}
       
   </select>
       <span className='checkbox'>
    <label>Above price $20</label>   
   <input
    type='checkbox' 
    onChange={checkedMeal}
    />



       </span>

       <span className='checkbox'>
      <label htmlFor='price'> Sort by price range ${price}</label>
         <input 
         type='range' 
         min={min}
         max={max}
         onChange={handleRange}
         step='1'
         
         />
       </span>










    </div>
   


    </>
  )
}

export default Categories
