
import styles from '../../styles/Contect.module.css'
import { useState } from 'react'

const Contect = () => {
  const [value , setvalue] =useState({
    name:"",
    email:"",
    mobile:"",
    content:""
  })


  const onchange = (e)=> {
      setvalue({...value ,[e.target.name]:e.target.value})
  }

  const handleclick = async (e)=>{
    e.preventDefault()
    const {name , email, mobile , content} = value;
    const res = await fetch(`http://localhost:3000/api/contect`,{
      'method':"POST",
      'headers':{
        'content-type':"application/json"
      },
      body:JSON.stringify({name , email , mobile, content})
    })
    const data = await res.json();
    console.log(data)
    setvalue({
      name:"",
      email:"",
      mobile:"",
      content:""      
    })
  }
 
  return (
    <div className= {styles.container}>
      <div className={styles.divisio}>
        <div className={styles.inpdiv}>
          <lable htmlFor= "name" className={styles.alllables}>Name:</lable>
          <input value={value.name} type="text" name = "name" id="name"  className={styles.allinput}  onChange = {onchange}/>
        </div>
        <div className={styles.inpdiv}>
          <lable htmlFor= "email" className={styles.alllables}>Email:</lable>
          <input type="text" value={value.email} name = "email" id="email"  className={styles.allinput} onChange = {onchange}/>
        </div>
        <div className={styles.inpdiv}>
          <lable htmlFor= "mobile" className={styles.alllables}>Mobile:</lable>
          <input type="text" name = "mobile" value= {value.mobile} id="mobile"  className={styles.allinput} onChange = {onchange}/>
        </div>
        <div className={styles.inpdiv}>
          <lable htmlFor= "content" className={styles.alllables}>Content:</lable>
          <input type="text" name = "content" id="content" value = {value.content} className={styles.allinput} onChange = {onchange}/>
        </div>
      </div>

      <button onClick={handleclick} className={styles.btn}>Submit</button>
    </div>
  )
}

export default Contect