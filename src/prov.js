import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'

const Provinsi = () => {
  const [prov, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      });
  }, []);

  return (
    <div>

      Jumlah Kasus Per provinsi di Indonesia
      <Table striped bordered hover size="sm">
          <table className ="table table-bordered">
        <thead>
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {prov.map((items)=>{return(
            <tr>
            <td>{items.provinsi}</td>
          <td>{items.kasusPosi}</td>
          <td>{items.kasusSemb}</td>
          <td>{items.kasusMeni}</td>
          </tr>
          )
          }) }
          
        </tbody>
        </table>
      </Table>
    </div>
  );
}

export default Provinsi;