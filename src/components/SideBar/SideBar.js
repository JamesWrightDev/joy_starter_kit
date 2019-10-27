import React from 'react'
import SideBarStyles from './sidebar.module.scss';

export default function SideBar() {
    return (
        <aside className={SideBarStyles.sidebar}>
            <h3>James Wright</h3>
            <strong>Front-end Developer</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi repellendus, necessitatibus debitis, magnam et distinctio placeat excepturi error.</p>
            <h4>Social</h4>
            <p>Social links</p>
        </aside>
    )
}
