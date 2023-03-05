import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './utils/hero.module.css'

import Button from '../Elements/button'

const Hero = () => (
  <div className={`${styles.hero} font-abc`}>
    <div
      className={`flex flex-col md:flex-row lg:flex-row pt-20 lg:ml-20 pb-20 lg:pb-10`}
    >
      <div className="flex-initial justify-center">
        <StaticImage
          quality={100}
          className={`${styles.image} m-w-[445.27px] m-h-[446.35px]  lg:mx-20`}
          src="../../../static/images/misabot.png"
        />
      </div>
      <div
        className={`${styles.heroContent} flex-1 text-center md:text-left lg:text-left lg:w-1/2 mx-5`}
      >
        <p className="italic text-lg md:text-xl lg:text-xl">
          Ateneo Management Information Systems Association
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold w-full lg:w-4/5">
          We build tomorrow through Business Technology
        </h2>
        <Button className="mt-6 mr-6" variant="secondary">
          Work with us!
        </Button>
        <Button variant="tertiary">Events</Button>
      </div>
    </div>
  </div>
)

export default Hero
