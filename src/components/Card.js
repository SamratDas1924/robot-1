import React from 'react'
import 'tachyons'
 function card(props) {
  return (
    <div className='bg-light-blue dib pa3 ma2 tc br3 grow shadow-5'>
        <img src={`https://robohash.org/${props.id}`} alt='robots'/>
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        
        </div>
    </div>
   
  )
}


export default card