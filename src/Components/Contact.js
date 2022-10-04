import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {name ,sname}=useParams();

  return (
<>    <h2 style={{ margin: "150px 0px" }} className="text-center" >
        Welcome {name} {sname}
      </h2>
</>  )
}

export default Contact