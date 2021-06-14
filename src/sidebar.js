import React from 'react'
import "./sidebar.css";
import SidebarRow from './sidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import  WhatshotIcon  from '@material-ui/icons/Whatshot';
import  SubscriptionsIcons from '@material-ui/icons/Subscriptions';
import  ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HistoryIcon from "@material-ui/icons/History";
import  OnDemandVideoIcon  from '@material-ui/icons/OndemandVideo';
import  WatchLterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
function sidebar() {
    return (
    
        <div className="sidebar">
            {/* <h1>I am sidebar</h1> */}
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcons} title="Subscription"/>
            <hr />
            <SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OnDemandVideoIcon} title="Your videos"/> 
            <SidebarRow  Icon={WatchLterIcon} title="Watch later "/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            {/* <SidebarRow title="Home"/> */}
            <hr />
        </div>
      
    )
}

export default sidebar
