import React, { useState } from 'react'

const slug = (props) => {
    const [data,setdata]  = useState(props);

    return (
        <>
            <style jsx>
                {`
                    .conatiner{
                        width:100%;
                        height:auto;
                        display: flex;
                        justify-content:center;
                        align-item:center;
                    }
                    .blogConatiner{
                        margin:5em 1em;
                        width: 70%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height:auto;
                    }
                    .blogtitle{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin: 3em 1em;
                        width:25em;
                        height:auto;
                    }
                    .blogparagraph{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height:auto;
                    }
                `}
            </style>
            <div className='conatiner'>
                <div className='blogConatiner'>
                    <h3 className='blogtitle'>{data.title}</h3>
                    <p className='blogparagraph'>
                        {data.content}
                    </p>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context){
    const {slug} = context.query; 
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    const mydata = await data.json()
    return {
      props: mydata
    }
  }

export default slug;