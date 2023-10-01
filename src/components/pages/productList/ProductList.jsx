import './productList.css';
import DataTable from '../../dataTable/DataTable';
import { productRows } from '../../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ProductList = () => {

    const [data,setData] = useState(productRows);

    const handleDelete = (id) =>{
        setData(data.filter((item)=> item.id !== id));
    };

    
const columns = [
    { field: 'id',
      headerName: 'ID',
      width: 50 
    },
    {
        field:"product",headerName:"Products",width:100,
        renderCell:(params)=>{
          return <img src={params.row.img ||"/noavatar.png"} alt="" />
         
        }
      },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 100,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    
  ];
  
  return (
    <div className = "products">
       <div className="info">
        <h1>Products</h1>
         <Link to = "/newProduct">
        <button>Add New Products</button>
        </Link>
       </div>
       <DataTable slug = "product" columns = {columns} rows = {productRows}/>    
    </div>
  )
}

export default ProductList