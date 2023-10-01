import DataTable from '../../dataTable/DataTable';
import './userList.css';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';



const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field:"avatar",headerName:"Avatar",width:70,
    renderCell:(params)=>{
      return <img src={params.row.img ||"/noavatar.png"} alt="" />
    }
  },
  
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];



const UserList = () => {
  return (
    <div className = "users">
       <div className="info">
        <h1>Users</h1>
        <Link to = "/newUser">
        <button>Add New User</button>
        </Link>
       </div>

       <DataTable slug = "user" columns = {columns} rows = {userRows}/>
    </div>
  )
}

export default UserList