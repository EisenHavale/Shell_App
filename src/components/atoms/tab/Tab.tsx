import React from 'react'
import { ITab } from '../../../interfaces/interfaces-component'

export const Tab = ({label, path}:ITab) => {
  return (
    <li>
      <a href={path}>{label}</a>
    </li>
  )
}
