import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { encrypt } from "../utils";
import async from "async";
import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
  authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc2hAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiI2NzY3Njc2NzY3MyIsImlhdCI6MTY3Mzg0NzU0MiwiZXhwIjoxNzA1NDA1MTQyfQ.nFgQw93J7kFuzm4R-kq_hvsdL78s8uG31uK1MqSSI4c",
  "Access-Control-Allow-Origin": "*",
};

const StudentList = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [user, setuser] = useState([
    {
      id: 1,
      name: "yash",
      lastName: "parmar",
    },
    {
      id: 2,
      name: "kamesh",
      lastName: "parmar",
    },
    {
      id: 3,
      name: "pintu",
      lastName: "parmar",
    },
  ]);

  const addNewStudent = async () => {
    await axios
      .post(
        `http://localhost:4000/api/addProduct`,
        {
          data: {
            productName: "hero",
            price: "4000",
            qty: "1",
          },
        },
        { headers: headers }
      )
      .then((response) => console.log(response, "response"))
      .catch((error) => {
        console.log(error, "error");
      });

    // let result = "";
    // let lastName = "";
    // let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // let charactersLength = characters.length;
    // for (let i = 0; i < 8; i++) {
    //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //   lastName += characters.charAt(
    //     Math.floor(Math.random() * charactersLength)
    //   );
    // }
    // const user1 = {
    //   id: Math.floor(10 + Math.random() * (100 - 10 + 1)),
    //   name: result,
    //   lastName: lastName,
    // };
    // setuser([...user, user1]);
  };

  const editStudent = (u) => {
    console.log(u, "user");
    // let encrypt1 = encrypt(u.id);
    navigate(`/edit/${encrypt(u.id)}`, {
      state: {
        user: u,
      },
    });
  };

  const deleteStudent = (obj) => {
    setuser(user.filter((u) => u.id !== obj.id));
  };
  return (
    <div>
      <button type="button" onClick={addNewStudent}>
        {" "}
        Add new Student
      </button>
      <table>
        <th>
          <td>first Name</td>
          <td>Last Name</td>
          <td>Action</td>
        </th>
        {user &&
          user.map((u) => (
            <tr>
              <td> {u.name}</td>
              <td> {u.lastName}</td>
              <td>
                {" "}
                <button type="button" onClick={() => editStudent(u)}>
                  {" "}
                  Edit
                </button>{" "}
                <button type="button" onClick={() => deleteStudent(u)}>
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default StudentList;
