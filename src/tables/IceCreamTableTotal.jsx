import DataTable from "react-data-table-component";

function IceCreamTableTotal() {


    const columns = [
        {
            name: "Total I/C cases picked",
            selector: (row) => row.allcases,
        },
        {
            name: "Total minutes picking",
            selector: (row) => row.totalminutes,
        },
        {
            name: "CPM",
            selector: (row) => row.wharehousecpm,
        }
    ];

    const data = [
        {
            allcases: 18690,
            totalminutes: 7727,
            wharehousecpm: 2.42
        },
        
    ]
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default IceCreamTableTotal
