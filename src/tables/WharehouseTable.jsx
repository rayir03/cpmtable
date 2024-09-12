import DataTable from "react-data-table-component";

function WharehouseTable() {

    const columns = [
        {
            name: "All cases picked",
            selector: (row) => row.allcases,
        },
        {
            name: "Total minutes picking",
            selector: (row) => row.totalminutes,
        },
        {
            name: "Wharehouse CPM",
            selector: (row) => row.wharehousecpm,
        }
    ];

    const data = [
        {
            allcases: 24877,
            totalminutes: 9207,
            wharehousecpm: 2.70
        },
        
    ]
    

  return (
    <div>
      <DataTable columns={columns} data={data} />
        
        
      
    </div>
  )
}

export default WharehouseTable
