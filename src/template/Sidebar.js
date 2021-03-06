import React from 'react';
import {Link} from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/hello">Hello</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/main">Main</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/portfolio">PortFolio</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/board/list">Board</Link>
            </div>
        </div>
    );
};

export default Sidebar;