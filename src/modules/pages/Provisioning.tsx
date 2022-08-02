import { useState, useEffect } from "react";
import Papa from "papaparse";

import DataTable from 'react-data-table-component';

export default function Provisioning() {

const [columns, setColumns] = useState([{}]);
const [data, setData] = useState([{}]);
const newCol: object[] = [];
const newData: object[] = [];

useEffect(() => {
  console.log('columns: ', columns);
  console.log('data: ', data);
}, [data, columns]);

  const changeHandler = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
       
        
        const objectData: any = {
          id: null,
          serialNumber: '',
          model: '',
          date: '',
        }

        results.data.map((d: object, i: number) => {
          const selector = Object.values(d);
          newCol.push({ name: Object.keys(d)[i], selector: (row: any) => selector[i] });
          objectData.id = i;
          objectData.serialNumber = selector[0];
          objectData.model = selector[1];
          objectData.date = Object.values(d)[2];
         
          console.log('object', objectData)
          newData.push(objectData);
        });
      },
    });
    setColumns(newCol);
    console.log('new data: ', newData);
    // setData(newData);
  };


  return (
    <div>
      <h1>Provisioning</h1>
      <div>
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
        />
      </div>

      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data} />
    </div>
  )
}

