import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {name ,sname}=useParams();
  return (
<>    <h2 style={{ margin: "150px 0px" }} className="text-center" >
        User {name} {sname}
      </h2>
</>  )
}

export default User