import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/abdul-rehman-1064')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setdata(data)
        })
    },[])
    return (
        <>
        <div className='text-orange-400 font-bold text-2xl text-center p-4'>Github Followers : {data.followers}</div>
        <img src={data.avatar_url} alt="" width="250px" className='rounded-full block mx-auto' />
        </>
    )
}

export default Github
