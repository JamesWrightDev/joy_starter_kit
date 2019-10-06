import React from 'react'

export default function ColumnContainer({children}) {
    return (
        <div className="layout--row">
            {children}
        </div>
    )
}
