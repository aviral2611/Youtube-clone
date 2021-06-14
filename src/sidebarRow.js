import React from 'react';
import "./sidebarRow.css"
// import HomeIcon from "@material-ui/icons/Home"
function sidebarRow({selected,Icon,title}) {
    return (
        
        <div className={`sidebarRow ${selected && "selected"}`}>
            
            <Icon className="sidebarRow__icon" />
            <h1 className="sidebarRow__title">{title}</h1>
        </div>
    )
}

export default sidebarRow
