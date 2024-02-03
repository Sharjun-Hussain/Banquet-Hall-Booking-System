import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ClosedBookings() {
  const param = useParams();
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const responce = await axios.get(
        "http://localhost:8000/admin/api/closedbookings"
      );
      const jsonn = responce.data.Bookingdata;

      setDatas(...datas, jsonn);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="text-center mt-4">Closed Bookings</h2>
          <div className="d-flex justify-content-center mt-4">
            <table>
              <tr>
                <th style={{ width: "250px" }}>Hall_ID</th>
                <th style={{ width: "250px" }}>CUSTOMER NAME</th>
                <th style={{ width: "250px" }}>DATE</th>
                <th style={{ width: "250px" }}>STATUS</th>
              </tr>

              {Array.isArray(datas) &&
                datas.map((data, index) => (
                  <tr className="my-2" key={index}>
                    <td>{data.HallID}</td>
                    <td>{data.Name}</td>
                    <td>{data.Date}</td>
                    <td>{data.status}</td>
                    <td>
                      <Button
                        className="mx-2 bg-success"
                        onClick={async () => {
                          const id = data._id;
                          console.log(id);
                          try {
                            await axios
                              .get(
                                `http://localhost:8000/admin/api/pendingbookings/${id}/pending`
                              )
                              .then((response) => {});
                          } catch (err) {
                            console.log(err);
                          }
                        }}
                      >
                        Make Pending
                      </Button>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ClosedBookings;
