import React from 'react'
import { IHeaderProps } from '../../../interfaces/interfaces-component';
import { headerContext } from '../../../app/HeaderContext/context';
export const Header = ({children, context}:IHeaderProps) => {
  return (
    <headerContext.Provider value={context}>
        {children}
    </headerContext.Provider>
  )
}
