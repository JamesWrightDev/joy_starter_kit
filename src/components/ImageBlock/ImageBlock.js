import React from "react"
import Image from "../image";
import ImageStyles from './imageBlock.module.scss';

export default function ImageBlock() {
  return (
    <div className={ImageStyles.image__block}>
      <Image />
      <div className={ImageStyles.image__text}>
        <h2>This is Text</h2>
      </div>
    </div>
  )
}
