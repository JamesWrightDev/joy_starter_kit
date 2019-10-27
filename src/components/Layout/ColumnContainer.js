import React from 'react'
import ColumnContainerStyles from './ColumnContainer.module.scss';

export default function ColumnContainer({children}) {

    return (
        <div className={ColumnContainerStyles.row} >
            {children}
        </div>
    )
}
