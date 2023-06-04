import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RequestDetails = () => {
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState({});

  return <div>RequestDetails {id}</div>;
};

export default RequestDetails;
