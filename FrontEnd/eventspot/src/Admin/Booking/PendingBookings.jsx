import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




function PendingBookings() {

  const [datas, setDatas] = useState([]);


  const fetchData = async () => {
    try {
      const responce = await axios.get(
        "http://localhost:8000/admin/api/pendingbookings"
      );
      const jsonn = responce.data.Bookingdata;
      console.log(responce.data)
      setDatas(...datas, jsonn);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HandleAccept = async (_id) => {
    const id = _id;
    console.log(id);
    try {
      await axios
        .get(`http://localhost:8000/admin/api/pendingbookings/${id}/accept`)
        .then((response) => {
          toast.success(response.data.Mess);
          
        });
        const newdata=  datas.filter((li)=> li._id !== id)
        setDatas(newdata);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleDecline = async (_id) => {
    const id = _id;
    console.log(id);
    try {
      await axios
        .get(
          `http://localhost:8000/admin/api/pendingbookings/${id}/decline`
        )
        .then((response) => {
          toast.success(response.data.Mess);
        
        });
        const newdata=  datas.filter((li)=> li._id !== id)
        setDatas(newdata);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col>
          <h2 className="text-center mt-4">Pending Bookings</h2>
          <div className="d-flex justify-content-center mt-4">
            <Table responsive>
              <thead>
                <tr>
                  <th style={{ width: "250px" }}>Hall_ID</th>
                  <th style={{ width: "250px" }}>CUSTOMER NAME</th>
                  <th style={{ width: "250px" }}>DATE</th>
                  <th style={{ width: "250px" }}>STATUS</th>

                  <th style={{ width: "250px" }}>ACTIONS</th>
                </tr>

                {Array.isArray(datas) && datas.map((data, index) => (
                    <tr className="my-2" key={index}>
                      <td>{data.HallID}</td>
                      <td>{data.Name}</td>
                      <td>{data.Date}</td>
                      <td>{data.status}</td>
                      <td>
                        <Button
                          className="mx-2 bg-success"
                          onClick={() => {HandleAccept(data._id);}}
                        >Accept</Button>
                        <Button
                          className="bg-danger"
                          onClick={()=>{ HandleDecline(data._id)}}
                        >
                          Decline
                        </Button>
                      </td>
                    </tr>
                  ))}
              </thead>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PendingBookings;
