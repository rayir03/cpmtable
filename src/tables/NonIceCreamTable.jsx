import DataTable from "react-data-table-component";
import NonIceCreamTableTotal from "./NonIceCreamTableTotal";

function NonIceCreamTable() {

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Number of Cases",
            selector: (row) => row.numberCases,
            sortable: true,
        },
        {
            name: "Total Minutes",
            selector: (row) => row.minutes,
            sortable: true,
        },
        {
            name: "CPM",
            selector: (row) => row.iceCreamCpm,
            sortable: true,
        }
    ];

    const data = [
        {
            name: "Reymond Ibarra",
            numberCases: 2698,
            minutes: 635,
            iceCreamCpm: 4.25
        },
        {
            name: "Yazid Ali",
            numberCases: 299,
            minutes: 33,
            iceCreamCpm: 9.06
        },
        {
            name: "Paul Saldana",
            numberCases: 2881,
            minutes: 764,
            iceCreamCpm: 3.77
        },
        {
            name: "Frank Tobias",
            numberCases: 309,
            minutes: 48,
            iceCreamCpm: 6.43
        },
    ]

  return (
    <div>
        <h1>Not Ice Cream</h1>
      <DataTable columns={columns} data={data}/>
      <NonIceCreamTableTotal />
    </div>
  )
}

export default NonIceCreamTable
