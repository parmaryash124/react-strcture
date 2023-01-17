import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { decrypt } from "../utils";

const EditStudent = () => {
  const location = useLocation();
  const { id } = useParams();
  console.log(id, "parmas");
  console.log(decrypt(id), "parmas");
  console.log(location.state, "state");
  return <div>{location.state.user.name} </div>;
};

export default EditStudent;
