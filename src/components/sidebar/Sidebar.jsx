import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className = "sidebar">
       <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList ">
                <Link to = "/" className = "link">
                <li className="sidebarListItem active">
                <i className="fa-solid fa-house sidebarIcon"></i>
                Home
                </li>
                </Link>

                <li className="sidebarListItem">
                <i class="fa-solid fa-chart-line sidebarIcon"></i>
                Analytics
                </li>

                <li className="sidebarListItem">
                <i class="fa-solid fa-chart-simple sidebarIcon"></i>
                Sales
                </li>

            </ul>

        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList ">
             <Link to = "/users" className = "link">
                <li className="sidebarListItem ">
               
                <i class="fa-regular fa-user sidebarIcon"></i>
                Users
                </li>
              </Link>
              
              <Link to = "/products" className = "link">
                <li className="sidebarListItem ">
                <i class="fa-solid fa-bag-shopping sidebarIcon"></i>
                Products
                </li>
               </Link>

                <li className="sidebarListItem">
                <i class="fa-solid fa-dollar-sign sidebarIcon"></i>
                Transactions
                </li>

                <li className="sidebarListItem">
                <i class="fa-solid fa-chart-simple sidebarIcon"></i>
                Reports
                </li>

            </ul>

        </div>


        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList ">
                <li className="sidebarListItem ">
                <i class="fa-regular fa-envelope sidebarIcon"></i>
                Mail
                </li>

                <li className="sidebarListItem">
                <i class="fa-regular fa-comment sidebarIcon"></i>
                Feedback
                </li>

                <li className="sidebarListItem">
                <i class="fa-regular fa-message sidebarIcon"></i>
                Messages
                </li>

            </ul>

        </div>


        <div className="sidebarMenu">
            <h3 className="sidebarTitle">staff</h3>
            <ul className="sidebarList ">
                <li className="sidebarListItem ">
                <i class="fa-solid fa-suitcase sidebarIcon"></i>
                Manage
                </li>

                <li className="sidebarListItem">
                <i class="fa-solid fa-chart-line sidebarIcon"></i>
                Analytics
                </li>

                <li className="sidebarListItem">
                <i class="fa-solid fa-circle-exclamation sidebarIcon"></i>
                Reports
                </li>

            </ul>

        </div>
       </div>
    </div>
  )
}

export default Sidebar