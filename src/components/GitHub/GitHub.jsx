import React from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {
//     const[data,setData]=useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/sandyait46')
//     .then(Response=>Response.json())
//     .then(data=>{
//         setData(data)
//     })
// } ,[]);
const data = useLoaderData();
    return (
<div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">GitHub Followers: {data.followers}
<img src='data.avatar_url' width={300} />
</div>
    )
}

export default GitHub;

export const gitHubInfoLoader = async()=>{
  const response =  await fetch('https://api.github.com/users/sandyait46')
  return response.json();
}