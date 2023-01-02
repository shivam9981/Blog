import styles from '../styles/Home.module.css'
import Image from 'next/image'
import img from './images/1.jpg'
import Link from 'next/link'
export default function Home() {
  
  return (
    <>
    {/* <style jsx>
    {`
      
      .test{
        width:35em;
        height:30%;
        // border :2px solid red;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size:1.5rem;
      };
      .img-tag{
        border:5px solid red;
        border-radius:2em;
      }
     
    `}</style> */}
    <div className={styles.container}>
    <div className={styles.inner_div_container}>
      <div className={styles.test}>
      <h1>This is a Blogers Website</h1>
      <p>this Website avalible is all type of blogs. and this blogs very use full for you</p>
      </div>
      <Image src={img} alt = "Image not found" className={styles.img_tag}  />
    </div>
    </div>
    <div className={styles.blog_content_conatiner}>
      <div className={styles.blog_div}>
        <Link href='/Component/Blog' className={styles.linkblog}><h3>This is a blog title</h3></Link>
        <p>this is a small bolg content If you're new to Next.js, we recommend starting with the learn course. The interactive course with quizzes will guide you through everything you need to know to use Next.js.
        If you have questions about anything related to Next.js, you're always welcome to ask our
        </p>  
      </div>
      <div className={styles.blog_div}>
      <Link href='/Component/Blog' className={styles.linkblog}><h3>This is a blog title</h3></Link>
        <p>this is a small bolg content If you're new to Next.js, we recommend starting with the learn course. The interactive course with quizzes will guide you through everything you need to know to use Next.js.
        If you have questions about anything related to Next.js, you're always welcome to ask our
        </p>  
      </div>
      <div className={styles.blog_div}>
      <Link href='/Component/Blog' className={styles.linkblog}><h3>This is a blog title</h3></Link>
        <p>this is a small bolg content If you're new to Next.js, we recommend starting with the learn course. The interactive course with quizzes will guide you through everything you need to know to use Next.js.
        If you have questions about anything related to Next.js, you're always welcome to ask our
        </p>  
      </div>
      <div className={styles.blog_div}>
      <Link href='/Component/Blog' className={styles.linkblog}><h3>This is a blog title</h3></Link>
        <p>this is a small bolg content If you're new to Next.js, we recommend starting with the learn course. The interactive course with quizzes will guide you through everything you need to know to use Next.js.
        If you have questions about anything related to Next.js, you're always welcome to ask our
        </p>  
      </div>
    </div>
    
    </>
  )
}
