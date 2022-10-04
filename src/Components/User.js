import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

const User = () => {
  const {name}=useParams();
  //useLocation is used to get current Dynamic url  
  const Location = useLocation();
  console.log(Location)

  const clicked=()=>{
    alert(`Welcome ${name} to  ${Location.pathname}`)
  }
  return (
<>    <h2 style={{ margin: "150px 0px" }} className="text-center" >
        User {name}
      </h2>
      <h2>My current Location is : {Location.pathname}</h2>
      {Location.pathname ===`/user/${name}`?
      (<button onClick={clicked}>Click me</button>):null}

</>  )
}

export default User