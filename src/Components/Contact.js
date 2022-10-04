import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

const Contact = () => {
  const {name ,sname}=useParams();
  const Location = useLocation();

  return (
<>    <h2 style={{ margin: "80px 0px 0px 0px" }} className="text-center" >
        Welcome {name} {sname}
      </h2>
      <h2>My current Location is : {Location.pathname}</h2>

</>  )
}

export default Contact