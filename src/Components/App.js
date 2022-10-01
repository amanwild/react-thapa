import React, { useState } from "react";
const App = () => {
  //   const state = useState();
  const [name, setName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    degree: "",
  });

  const set = (event) => {
    const { name, value } = event.target;

    setName((preValue) => {
      console.log(preValue);
      console.log(name);
      console.log(value);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const result = (e) => {
    e.preventDefault();
    console.log(e);

    alert("form Submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={result}>
          <h1>
            {" "}
            Hello {name.fname} {name.lname}
          </h1>
          <h1>
            <p>{name.email}</p>
            <p>{name.phone}</p>
            <p>{name.degree}</p>
          </h1>
          <input
            className="in"
            type="text"
            name="fname"
            value={name.fname}
            placeholder="First Name"
            onChange={set}
          />
          <input
            className="in"
            type="text"
            name="lname"
            value={name.lname}
            placeholder="Last Name"
            onChange={set}
          />
          <input
            className="in"
            type="email"
            name="email"
            value={name.email}
            placeholder="email"
            onChange={set}
          />
          <input
            className="in"
            type="number"
            name="phone"
            value={name.phone}
            placeholder="number"
            onChange={set}
          />
          <input
            className="in"
            type="text"
            name="degree"
            value={name.degree}
            placeholder="Last Name"
            onChange={set}
          />
          <button type="submit">Click me</button>
        </form>
      </div>
    </>
  );
};
export default App;
