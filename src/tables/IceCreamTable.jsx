import DataTable from "react-data-table-component";
import IceCreamTableTotal from "./IceCreamTableTotal";


function IceCreamTable() {

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
            minWidth: "150px"
            
        },
        {
            name: "Number of Cases",
            selector: (row) => row.numberCases,
            sortable: true,
            minWidth: "150px"
           
        },
        {
            name: "Total Minutes",
            selector: (row) => row.minutes,
            sortable: true,
            minWidth: "150px"
             
        },
        {
            name: "CPM",
            selector: (row) => row.iceCreamCpm,
            sortable: true,
            minWidth: "100px"
             
        }
    ];

    const data = [
        {
            name: "Raymel Iznaga",
            numberCases: 980,
            minutes: 342,
            iceCreamCpm: 2.87
        },
        {
            name: "Rainer Pena",
            numberCases: 1314,
            minutes: 472,
            iceCreamCpm: 2.78
        },
        {
            name: "Gavin (Will) Melchor",
            numberCases: 2605,
            minutes: 1248,
            iceCreamCpm: 2.09
        },
        {
            name: "Yuviny Portillo",
            numberCases: 2573,
            minutes: 1068,
            iceCreamCpm: 2.41
        },
        {
            name: "Armando Miranda",
            numberCases: 2781,
            minutes: 942,
            iceCreamCpm: 2.95
        },
        {
            name: "Jerimiah Chavez",
            numberCases: 1381,
            minutes: 477,
            iceCreamCpm: 2.90
        },
        {
            name: "Robert Smith",
            numberCases: 1521,
            minutes: 517,
            iceCreamCpm: 2.94
        },
        {
            name: "Cristian Paulin",
            numberCases: 197,
            minutes: 45,
            iceCreamCpm: 4.38
        },
        {
            name: "Jefry Chavarria",
            numberCases: 806,
            minutes: 447,
            iceCreamCpm: 1.80
        },
        {
            name: "John Lopez",
            numberCases: 2668,
            minutes: 1255,
            iceCreamCpm: 2.13
        },
        {
            name: "Jose Venura",
            numberCases: 1864,
            minutes: 914,
            iceCreamCpm: 2.04
        },
        
    ]

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
        <h1>Ice Cream</h1>
      <DataTable 
        columns={columns} 
        data={data} 
        fixedHeader
      
      />
      <IceCreamTableTotal />
      
    </div>
  )
}

export default IceCreamTable
