import React from "react"
import ColumnContainerStyle from './ColumnContainer.module.scss';

const Column = ({children}) => {
  return (
      <div className={ColumnContainerStyle.column}>
        {children}
       </div>
  )
}
export default Column
