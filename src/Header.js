import React ,{useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import NotificationIcon from "@material-ui/icons/Notifications";
import AppIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import VideoCallIcon from "@material-ui/icons/VideoCall";
function Header() {
    const [inputSearch,setInputSearch]=useState("");
    // in starting it is empty so that it wont write that we dont want to write and whenever we write something  it changes in setINputSearch 
    // and by using onChsnge property inputSearch changes.
    // useStae is used whenever any changes made it gets copy to inputSearch    
    // console.log(inputSearch);
    // console.log(setInputSearch);
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/"><img className="header__logo" src="https://th.bing.com/th/id/OIP.wTXDyBs12UENd705iBMlUwHaDF?pid=ImgDet&rs=1" alt="youtube" />
                </Link>
             
            {/* <h1> i am header</h1> */}
            </div>
            <div className="header__input">
                <input
                value={inputSearch} 
                type="text" 
                placeholder="Search"
                onChange={(e)=>setInputSearch(e.target.value)}
                //means whenever we change something on search bar it state get changes
                />

                {/* this is  dynamic url  usiiing inputSearch for url */}
                <Link to={`/search/${inputSearch}`} ><SearchIcon  className="header__inputbtn"/></Link>
                
                
            </div>
           
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppIcon className="header__icon"/>
                <NotificationIcon className="header__icon"/>
                <Avatar src="https://yt3.ggpht.com/yti/ANoDKi7q3i3meIqIR_ZEcP5CCbs17ZSYru2BGg2FhsiJ=s88-c-k-c0x00ffffff-no-rj-mo" alt="aviral"/>
                </div>
           
                {/* link  component does not refresh the page */}
            </div>
    )
}

export default Header
