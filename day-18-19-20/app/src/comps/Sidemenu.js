import { Link } from "react-router-dom";

export default function SideMenu(){
    return(
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">PARC AUTO</div>
            </a>

            
            <hr class="sidebar-divider my-0" />

           
            <li class="nav-item">
                <Link to={ '/clients' } class="nav-link"  >
                    <i class="fas fa-users"></i>
                    <span>Clients</span></Link>
            </li>

             

        </ul>
    );
}