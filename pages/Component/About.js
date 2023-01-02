import React from 'react'
import styles from '../../styles/About.module.css'
import Image from 'next/image'
import img from '../images/2.jpg'
import services from '../images/4.jpg'
import visin from '../images/6.jpg'
import value from '../images/5.jpg'
import purpose from '../images/3.jpg'

const About = () => {
  return (
    <>
      <style jsx>
        {`
          #fonts{
            font-size:5em;
            // width:10em;
          }
          #fontsss{
            font-size:1.5em;
          }
        `}
      </style>

      <div className={styles.conatiner}>
        <div className={styles.innerconatiner}>
          <Image src={img} alt="Image not found" className={styles.imagecont} />
          <div>
            <h1 className={styles.para} id='fonts'>
              About Us Page
            </h1 >
            <p className={styles.para} id='fontsss'>this is simple blog website. this website develop by SHIVAM GUPTA. this website use technology is NEXTJS this is module of javascript</p>
          </div>
        </div>


        <div className={styles.seconddiv}>
          <div className={styles.secdivinner} >

          <Image src={purpose} alt="Image not found" className={styles.imagec} />
            <h1>PURPOSE</h1>
            <p className={styles.paragr}>To raise awareness about environmental sustainability and issues that are currently affecting our oceans.</p>
          </div>
          <div className={styles.secdivinner}>
            <Image src={visin} alt="Image not found" className={styles.imagec} />
            <h1>VISION</h1>
            <p className={styles.paragr}>To educate, inspire and empower people of all ages around the world to take action to protect our oceans.</p>
          </div>
          <div className={styles.secdivinner}>
            <Image src={value} alt="Image not found" className={styles.imagec} />
            <h1>VALUES</h1>
            <p className={styles.paragr}>We are passionate in all we do and truly believe in our cause.

              We are inclusive and believe everyone can be an ocean hero.

              We are innovative and are always looking for new ways to educate and empower.

              We are engaging and will always make learning an enjoyable experience.</p>
          </div>
          <div className={styles.secdivinner}>
            <Image src={services} alt="Image not found" className={styles.imagec} />
            <h1>SERVICES</h1>
            <p className={styles.paragr}>Through our four program models, our charity delivers innovative classes and facilitates engaging projects to people of all ages - inspiring us all to make a positive and lasting impact on our oceans.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About