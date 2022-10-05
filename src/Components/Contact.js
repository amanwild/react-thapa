import React,{useState} from "react";
const Contact = () => {
  const [data, setdata] = useState({
    name:'',
    age:'',
    gender:'',
    email:'',
    phone:'',
    address:'',
    more:'',

  })
  const submit=(e)=>{
    e.preventDefault();
    alert(`Your name is ${data.name} (${data.gender}) .Phone no. is ${data.phone}. Email is ${data.email}.`)
  }
  const inputEvent=(event)=>{
    const { name ,value}=event.target;
    setdata((predata)=>{
      return{
        ...predata,
        [name]:value, 
    }
  })
  console.log(data)
}
  return (
    <>
      <div className="my-3">
        <h1 id="card" className="text-center border-2 my-3">
          <strong className="brand-name">Our Contacts</strong>
        </h1>
      </div>
      <form
        className="text-center"
        action="/contact"
        method="post"
        id="contact"
        onSubmit={submit}
      >
        <ul className="col-11 m-auto p-0">
          <li>
            <h5 className="d-inline-block col-4 my-3 text-left p-0 bg-transparent justify-content">
              Name :
            </h5>
            <input
              className="m-0 col-8 d-inline-block"
              type="text"
              name="name"
              onChange={inputEvent}
              value ={data.name}
              id="name"
              placeholder="Enter your name"
            />
          </li>
          <li>
            <h5 className="d-inline-block col-4 my-3 text-left p-0 bg-transparent justify-content">
              Age :
            </h5>
            <input
              className="m-0 col-8 d-inline-block"
              type="text"
              name="age"
              onChange={inputEvent}
              value ={data.age}
              id="age"
              placeholder="Enter your age"
            />
          </li>
          <li>
            <h5 className="d-inline-block col-4 my-3 text-left p-0 bg-transparent justify-content">
              Gender :
            </h5>
            <input
              className="m-0 col-8 d-inline-block"
              type="text"
              name="gender"
              onChange={inputEvent}
              value ={data.gender}
              id="gender"
              placeholder="Enter your gender"
            />
          </li>
          <li>
            <h5 className="d-inline-block col-4 my-3 text-left p-0 bg-transparent justify-content">
              Email :
            </h5>
            <input
              className="m-0  col-8 d-inline-block"
              type="email"
              name="email"
              onChange={inputEvent}
              value ={data.email}
              id="email"
              placeholder="Enter your email"
            />
          </li>
          <li>
            <h5 className="d-inline-block col-4 my-3 text-left p-0 bg-transparent justify-content">
              Phone No. :
            </h5>
            <input
              id="validationCustom02"
              className="m-0 col-8 d-inline-block"
              type="phone"
              onChange={inputEvent}
              value ={data.phone}
              name="phone"
              // id="phone"
              placeholder="Enter your Phone no."
            />
          </li>
          <li>
            <h5 className="d-inline-block col-4 align-content-between  my-3 text-left p-0 bg-transparent justify-content">
              Address :
            </h5>
            <textarea
              name="address"
              className="m-0 col-8 my-auto d-inline-block"
              id="address"
              onChange={inputEvent}
              value ={data.address}
              cols="20"
              rows="3"
              placeholder="Enter your address"
            ></textarea>
          </li>
          <li>
            <h5 className="d-inline-block col-4 my-3 text-left p-0 bg-transparent justify-content">
              Tell more about yourself :
            </h5>
            <textarea
              name="more"
              className="m-0 col-8 d-inline-block"
              id="more"
              onChange={inputEvent}
              value ={data.more}
              cols="30"
              rows="3"
              placeholder="More about you.."
            ></textarea>
          </li>
          <button className="btn btn-success mx-2 my-2 my-sm-0 ">Submit</button>
        </ul>
      </form>
    </>
  );
};

export default Contact;
