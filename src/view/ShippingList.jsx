import axios from "axios";
import { React, useEffect, useState } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBContainer,
  MDBCard,
} from "mdbreact";

function ListShippings() {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-orders")
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <MDBContainer className="mt-5">
      <MDBCard className="p-3">
        <MDBTable>
          <MDBTableHead color="black" textWhite>
            <tr>
              <th>Name</th>
              <th>Weight(kg)</th>
              <th>Color</th>
              <th>Country</th>
              <th>Shopping Cost</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.weight}</td>
                  <td>
                    <div
                      style={{
                        width: "50px",
                        height: "20px",
                        backgroundColor: order.color,
                      }}
                    ></div>
                  </td>
                  <td>{order.country}</td>
                  <td>{order.cost}</td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBCard>
    </MDBContainer>
  );
}

export default ListShippings;
