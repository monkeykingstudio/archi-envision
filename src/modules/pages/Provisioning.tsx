import { useState, useEffect } from "react";
import Papa from "papaparse";

import DataTable from 'react-data-table-component';

export default function Provisioning() {

const [columns, setColumns] = useState([{}]);
const [data, setData] = useState([{}]);
const newCol: object[] = [];
const newData: object[] = [];

useEffect(() => {
  console.log('final data: ', data);
  console.log('final columns: ', columns);

  
}, [data, columns]);

  const changeHandler = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {

        results.data.map((d: object, i: number) => {
          const selector = Object.values(d);
          if(i <= 2) {
            setColumns(newCol => [...newCol, 
              {name: Object.keys(d)[i], selector: (row: any) => [
                row.serialNumber, 
                row.model, 
                row.date][i]
              }
              ]);
          }

          const objectData: any = {
            id: i,
            serialNumber: selector[0],
            model: selector[1],
            date: selector[2],
          }
          
          console.log('object', i, objectData)
          setData(newData => [...newData, objectData]);
        });
      },
    });
    setColumns(newCol);
    setData(newData);
    console.log('final data: ', data);

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

