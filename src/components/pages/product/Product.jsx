import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../chart/Chart";
import { productData } from "../../../dummyData";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>

        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales performance"
            className="productChart"
          />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwK7g4qXoqDiUqA-LfBHv_uifjxryM5V8qg&usqp=CAU"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple AirPods</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>

              <span className="productInfoValue">123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>

              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>

              <span className="productInfoValue">yes</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>

              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>

            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">NO</option>
            </select>

            <label>Active</label>

            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">NO</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwK7g4qXoqDiUqA-LfBHv_uifjxryM5V8qg&usqp=CAU"
                alt=""
                className="productUploadImg"
              />

              <label htmlFor="file">
                <i class="fa-solid fa-upload"></i>
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
