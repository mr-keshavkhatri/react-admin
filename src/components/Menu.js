import React from "react";
import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <link to={'/'} className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home" className="align-text-bottom"></span>
                    Dashboard
                  </link>
                </li>
                <li className="nav-item">
                  <link to={'/users'} className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home" className="align-text-bottom"></span>
                    Users
                  </link>
                </li>
              </ul>
            </div>
          </nav>
    )
}
export default Menu;