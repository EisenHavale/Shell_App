import React, { useContext } from 'react'
import { headerContext } from '../../../app/HeaderContext/context'
import { Tab } from '../../atoms/tab/Tab';
export const NavBar = () => {
  const context = useContext(headerContext);
  return (
    <>
      {context.map((tab, index)=>{
        return (
          <Tab key={index} label={tab.name} path={tab.path} />
        )
      })}
    </>
    
  )
}
