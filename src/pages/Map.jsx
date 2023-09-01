import React from 'react'

const Map = () => {
    const navItems=['home','about','services','portfolio']
    const products=['kitchen appliances','electronic devices','home appliances']
    const electronicitems=['iphone xr20 max', 'redmi note 15 pro max','samsung','pixels','motorola','nothing phone','one plus']
  return (
    <>
    <div>Map
        <ul>
            {navItems.map((items,index)=>(
                <li key={index}>{items}{index}</li>
            ))}
        </ul>
    </div>
    <br />
    <div>products
        <ul>
            {products.map((items,index)=>(
                <li key={index}>{items}{index}</li>
            ))}
        </ul>
    </div>
    <br />
    <div>electronicitems
        <ul>
            {electronicitems.map((items,index)=>(
                <li key={index}>{items}{index}</li>
            ))}
        </ul>
    </div>
    </>
    
  )
}

export default Map