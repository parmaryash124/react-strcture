import React, { useState } from "react";

// {
//     name : 'james',
//     age : 12,
//     address : {
//       city : 'Surat',
//       country : 'India'
//    }

//    output should look like this for all the objects :
//     "james is 12 years old and lives in surat india"

const DisplayList = () => {
  const [user, setUser] = useState([
    {
      name: "yash",
      age: 15,
      address: {
        city: "Ahmedabad",
        country: "India",
      },
    },
    {
      name: "james",
      age: 12,
      address: {
        city: "Surat",
        country: "USA",
      },
    },
  ]);
  return (
    <div>
      {user &&
        user.map(
          (u) =>
            `${u.name} is ${u.age} years old and lives in ${u.address.city},${u.address.country}`
        )}
    </div>
  );
};

export default DisplayList;
