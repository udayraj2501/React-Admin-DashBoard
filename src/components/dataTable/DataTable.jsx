import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import "./dataTable.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productRows } from "../../dummyData";

const DataTable = (props) => {
  const {columns,rows,slug} = props

  const [data,setData] = useState(productRows);

  const handleDelete = (id) =>{
    setData(data.filter((item)=> item.id !== id));
    
    console.log(id + "has been deleted");
  }


  const actionColumn = {
    field : "action",
    headerName: "Actions",
    width:200,
    renderCell:(params)=>{
      return(
       
        <div className="action">
          <Link to ={`/${slug}/${params.row.id}`}>
          <i class="view fa-regular fa-pen-to-square"></i>
          </Link>

          <div className="delete" onClick = {() => handleDelete(params.row.id)}>
          <i class="delete fa-solid fa-trash"></i>
          </div>
        </div>

      )
    }

  }

  const columnsWithAction = [...columns, actionColumn];
  return (
    <div className='dataTable'>
        <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columnsWithAction}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots = {{toolbar : GridToolbar}}
        slotProps = {{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps:{dobounceMs:500},
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable