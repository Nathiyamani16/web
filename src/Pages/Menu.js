import React from 'react'
import {MenuList} from "../helpers/MenuList";
import MenuItem from "../Component/MenuItem";
import "../Styles/Menu.css"

export default function Menu() {
  return (
    <div className='menu'>
        <div className='menuTitle'>Our Menu</div>
        <div className='menulist'>
            {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
            );
        })}
        </div>
      
    </div>
  )
}
