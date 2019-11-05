import React from 'react'
import PostStyle from './post.module.scss';

export default function Post() {
    const { header, meta, date, category, cta } = PostStyle;

    return (
        <div>
            <h2 className={header}>Post Title</h2>
            <div className={meta}>
                <p className={date}>September 8, 2016</p>
                <strong className={category}>Technology</strong>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rerum qui quo fuga eaque. Neque eligendi pariatur minus similique eius, eos facere voluptatem temporibus distinctio dolorum repellat sunt deleniti nesciunt.</p>
            <a className={cta} href="www.bbc.com">Read More</a>
        </div>
    )
}
