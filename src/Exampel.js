import React, { useDeferredValue, useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Exampel() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const data = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> user id </th>
            <th>id </th>
            <th>title </th>
            <th>body </th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((list, useid) => (
            <tr>
              <td>{list?.userId}</td>
              <td>{list?.id}</td>
              <td>{list?.title}</td>
              <td>{list?.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Exampel;
