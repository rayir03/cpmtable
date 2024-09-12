import DataTable from "react-data-table-component";

function NonIceCreamTableTotal() {
    const columns = [
        {
            name: "Total Chill cases picked",
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
            allcases: 6187,
            totalminutes: 1480,
            wharehousecpm: 4.18
        },
        
    ]
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default NonIceCreamTableTotal
