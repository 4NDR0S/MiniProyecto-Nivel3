import React from 'react'

export default function Nav({img_nav, lupita, main_modal, cityNav}) {

  return (
    <div className='nav'>
        <picture>
            <img src={img_nav} alt="" />
        </picture>

        <button className='barra_nav' onClick={main_modal}>
            <h3>{cityNav || "All"}, Finland</h3>
            <span>Add guests</span>
            {/* <input type="text" placeholder='Add guests'/> */}
            
              <img src={lupita} alt="" />
            
        </button>
    </div>
  )
}
