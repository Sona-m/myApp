import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from 'react-bootstrap/Navbar';
import { Typography, Link} from "@mui/material";

function Nav() {
    return(
     <Navbar >
      <div class = "d-flex " style ={{width: '100%' , justifyContent : 'space-around'}}>
       <div className="  container-fluid justify-content-end  p-0 order-last " >
          <div className="col-auto min-vh-100 bg-dark text-center position-absolute end-0"style={{width:'20%' }}>
             <Typography variant = "h4" color = "gray" pt={4} pb ={4}>Neuralmind</Typography>
             <div class="nav flex-column nav-pills pt-4 " id = "nav-items">
                <Link class = "nav-link nav-item active  text-sm-center m-3 " id="nav-items-train" data-bs-toggle ="pill" to="#Train">Train</Link>
                <Link  class = "nav-link text-warning nav-item text-sm-center m-3" id="nav-items-chat" data-bs-toggle = "pill" to="#Chat">Chat</Link>
                <Link  class = "nav-link text-warning nav-item text-sm-center m-3" id= "nav-items-admin" data-bs-toggle = "pill" to="#Admin">Admin</Link>
             </div>
        </div>
       </div>
       <div class = "tab-content order-first " style ={{width: '75%'}}>
         <div class="tab-pane fade show active" id ="Train">train</div>
         <div class="tab-pane fade " id ="Chat">chat</div>
         <div class="tab-pane fade " id ="Admin">Admin section</div>
       </div>
       </div>
     </Navbar>
    );
}
export default Nav;