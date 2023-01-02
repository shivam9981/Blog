import styles from '../../styles/Blog.module.css'
import Link from 'next/link'
import { useState } from 'react'
const Blog = (props) => {
  // console.log(props)
  const [data , setdata] = useState(props.getblogs)
  // console.log(data)
  return (
    <div className={styles.blog_content_conatiner}>
      {data.map((e) =>{
        return <div className={styles.blog_div} key={e.slug}>
        <Link href={`/Component/blogPost/${e.slug}`} className={styles.hading_tag}><h3>{e.title}</h3></Link>
        <p>{e.content.substr(0,250)+"..."}
        </p>
      </div>
      })}
    </div>
  )
}


export async function getServerSideProps(context){
  let data = await fetch(`http://localhost:3000/api/hello`);
  let getblogs = await data.json()

  return {
    props: {getblogs},
  }
}


export default Blog